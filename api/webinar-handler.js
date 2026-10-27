/**
 * MLC Webinar Handler — Vercel Serverless Function (Node.js runtime)
 * Event: "Dalle slide alla scena" — Laura Locatelli × Maurizio La Cava
 * Date:  17 November 2026, 12:00–13:00 CET
 *
 * Flow: upsert contact → add to list WEBINARS → apply tag with DELETE + RE-ADD
 * (the delete + re-add is mandatory: ActiveCampaign's "Tag is added" trigger is
 *  idempotent and will NOT fire again if the tag is already on the contact).
 *
 * Env vars required (Production + Preview):
 *   AC_API_URL      e.g. https://mlcpresentations.api-us1.com
 *   AC_API_KEY      ActiveCampaign API key
 *   AC_LIST_NAME    WEBINARS                            (verified: list id 31)
 *   AC_TAG_NAME     [registered] 2026_11_17_TalkLaura   (optional, defaults below)
 *   ALLOWED_ORIGIN  https://talk.mlcpresentations.com
 *   SETUP_TOKEN     random string, used once for /api/webinar-handler?setup=1&token=...
 */

const AC_URL = (process.env.AC_API_URL || '').replace(/\/+$/, '');
const AC_KEY = process.env.AC_API_KEY || '';
const LIST_NAME = process.env.AC_LIST_NAME || 'WEBINARS';
// Convention verified against the MLC account: [registered] 2026_07_15_TalkJosh,
// [registered] 2026_02_05_TalkCole, [registered] 2026_04_02_TalkAL,
// [registered] 2026_09_16_TalkRolly. Tag for this event already created in AC (id 992).
const TAG_NAME = process.env.AC_TAG_NAME || '[registered] 2026_11_17_TalkLaura';
const TAG_DESCRIPTION = 'Iscritti al Talk MLC con Laura Locatelli - ' + TAG_NAME;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';
const SETUP_TOKEN = process.env.SETUP_TOKEN || '';

const WEBINAR_DATE = '2026-11-17';
const WEBINAR_NAME = 'Dalle slide alla scena - Laura Locatelli';

/* ---------------------------------------------------------------- helpers */

async function ac(path, options = {}) {
  const res = await fetch(`${AC_URL}/api/3/${path}`, {
    ...options,
    headers: {
      'Api-Token': AC_KEY,
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  });

  const text = await res.text();
  let body = null;
  try { body = text ? JSON.parse(text) : null; } catch (_) { body = { raw: text }; }

  if (!res.ok) {
    const err = new Error(`ActiveCampaign ${res.status} on ${path}`);
    err.status = res.status;
    err.body = body;
    throw err;
  }
  return body;
}

function isValidEmail(v) {
  return typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
}

function setCors(res) {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

/* ------------------------------------------------------- AC primitives */

async function findListId(name) {
  const data = await ac(`lists?filters[name]=${encodeURIComponent(name)}&limit=100`);
  const exact = (data.lists || []).find(l => l.name === name);
  return exact ? exact.id : null;
}

async function findOrCreateTag(name) {
  const data = await ac(`tags?search=${encodeURIComponent(name)}&limit=100`);
  const exact = (data.tags || []).find(t => t.tag === name);
  if (exact) return exact.id;

  const created = await ac('tags', {
    method: 'POST',
    body: JSON.stringify({ tag: { tag: name, tagType: 'contact', description: TAG_DESCRIPTION } })
  });
  return created.tag.id;
}

async function upsertContact({ email, firstName, lastName, phone }) {
  const payload = {
    contact: {
      email: email.trim().toLowerCase(),
      firstName: firstName || '',
      lastName: lastName || ''
    }
  };
  if (phone) payload.contact.phone = phone;

  const data = await ac('contact/sync', { method: 'POST', body: JSON.stringify(payload) });
  return data.contact.id;
}

async function addToList(contactId, listId) {
  await ac('contactLists', {
    method: 'POST',
    body: JSON.stringify({
      contactList: { list: listId, contact: contactId, status: 1 }
    })
  });
}

/**
 * DELETE + RE-ADD. Do not simplify. A plain POST is a no-op when the tag
 * already exists, and the AC automation trigger "Tag is added" never fires,
 * so returning registrants get no confirmation email.
 */
async function applyTagForcingTrigger(contactId, tagId) {
  const existing = await ac(`contacts/${contactId}/contactTags`);
  const match = (existing.contactTags || []).find(ct => String(ct.tag) === String(tagId));

  if (match) {
    await ac(`contactTags/${match.id}`, { method: 'DELETE' });
    await new Promise(r => setTimeout(r, 600)); // let AC settle before re-adding
  }

  await ac('contactTags', {
    method: 'POST',
    body: JSON.stringify({ contactTag: { contact: contactId, tag: tagId } })
  });
}

/* ----------------------------------------------------------- setup mode */

async function handleSetup(req, res) {
  const token = (req.query && req.query.token) || '';
  if (!SETUP_TOKEN || token !== SETUP_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const listId = await findListId(LIST_NAME);
  const tagId = await findOrCreateTag(TAG_NAME);

  return res.status(200).json({
    ok: true,
    acUrl: AC_URL,
    listName: LIST_NAME,
    listId,
    tagName: TAG_NAME,
    tagId,
    note: listId ? 'List resolved.' : `List "${LIST_NAME}" NOT found — create it in ActiveCampaign.`
  });
}

/* -------------------------------------------------------------- handler */

module.exports = async function handler(req, res) {
  setCors(res);

  if (req.method === 'OPTIONS') return res.status(204).end();

  if (!AC_URL || !AC_KEY) {
    console.error('Missing AC_API_URL or AC_API_KEY');
    return res.status(500).json({ error: 'Server not configured' });
  }

  if (req.method === 'GET') {
    if (req.query && req.query.setup === '1') {
      try {
        return await handleSetup(req, res);
      } catch (e) {
        console.error('setup failed', e, e.body);
        return res.status(500).json({ error: 'Setup failed', detail: e.message });
      }
    }
    return res.status(200).json({ ok: true, event: WEBINAR_NAME, date: WEBINAR_DATE });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (_) { body = {}; }
  }
  body = body || {};

  const email = (body.email || '').trim();
  const fullName = (body.name || '').trim().replace(/\s+/g, ' ');

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  if (!fullName) {
    return res.status(400).json({ error: 'Missing name' });
  }

  // Single "Your name" field on the landing → split on the first space.
  const parts = fullName.split(' ');
  const firstName = parts.shift();
  const lastName = parts.join(' '); // empty when only one word was given — AC accepts that

  try {
    const contactId = await upsertContact({ email, firstName, lastName });

    const listId = await findListId(LIST_NAME);
    if (listId) {
      await addToList(contactId, listId);
    } else {
      console.warn(`List "${LIST_NAME}" not found — contact created but not subscribed.`);
    }

    const tagId = await findOrCreateTag(TAG_NAME);
    await applyTagForcingTrigger(contactId, tagId);

    return res.status(200).json({ success: true, contactId });
  } catch (e) {
    console.error('Registration failed', e.message, e.body);
    return res.status(500).json({ error: 'Registration failed' });
  }
};
