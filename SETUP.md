# Setup · Landing "Dalle slide alla scena · Laura Locatelli"

**Evento:** martedì 17 novembre 2026, 12:00–13:00 (CET) · Microsoft Teams · italiano
**Dominio:** `talk.mlcpresentations.com` (sottodominio MLC, perché i filtri aziendali tipo Zscaler bloccano `*.vercel.app`)
**Repo:** `LauraFazio/webinar-talk-laura-locatelli` (pubblico, come le altre landing su Vercel Hobby)
**Tag AC:** `[registered] 2026_11_17_TalkLaura` · **già creato, id 992** · lista `WEBINARS` (id 31)
**Base:** landing Talk Rolly (versione pre-evento del 31/08), stessa struttura: header, hero, form
nome + email, pitch su sfondo nero, due speaker, CTA finale, footer.

## Cosa c'è nella cartella

| File | Note |
|---|---|
| `index.html` | landing in italiano, Gilroy self-hosted da `fonts/` |
| `api/webinar-handler.js` | uguale a Rolly, cambiano data, nome evento e tag. Logica delete + re-add del tag invariata |
| `assets/hero-laura.jpg` | 900×1125, bianco e nero (come le foto di Rolly e Maurizio) |
| `assets/laura-locatelli.jpg` | 600×600, B/N, ritratto per la sezione speaker |
| `assets/og-webinar.jpg` | 1200×630, anteprima per LinkedIn/WhatsApp |
| `CONFIRMATION-EMAIL.html` | email di conferma da incollare nell'automation AC |
| `EMAIL-SEQUENCE.md` | testi di tutte le email |
| `2026_11_17_Launch_Plan_TalkLaura.xlsx` | piano 3 settimane + checklist email + social + setup |
| `source-assets/` | foto originali di Laura, esclusa da git |

## Passi

1. **GitHub:** crea il repo vuoto `LauraFazio/webinar-talk-laura-locatelli`, poi doppio clic su
   `1 - PUBBLICA SU GITHUB.bat`.
2. **Vercel:** importa il repo. Env vars (Production + Preview):
   `AC_API_URL`, `AC_API_KEY`, `AC_LIST_NAME=WEBINARS`,
   `AC_TAG_NAME=[registered] 2026_11_17_TalkLaura`,
   `ALLOWED_ORIGIN=https://talk.mlcpresentations.com`, `SETUP_TOKEN` (stringa a caso).
3. **Dominio:** Vercel → Settings → Domains → aggiungi `talk.mlcpresentations.com`, poi sul DNS di
   mlcpresentations.com un record `CNAME talk → cname.vercel-dns.com` (come fatto per `webinar.`).
4. **Controllo AC:** apri `/api/webinar-handler?setup=1&token=SETUP_TOKEN`: deve rispondere con
   `listId: 31` e `tagId: 992`.
5. **Automation conferma:** duplica la 157, cambia il tag del trigger (Runs multiple times),
   incolla `CONFIRMATION-EMAIL.html` in un blocco HTML.
6. **Test:** iscriviti con un'email di prova e verifica contatto, lista, tag ed email di conferma.
7. **Aggiornamenti:** `2 - AGGIORNA IL SITO.bat`.

## Da completare

- Link Teams del 17/11: serve per le email del 16 e del 17 (non va nella landing).
- Iubenda: stessa privacy policy delle landing precedenti (`62712785`).
- Chiedere a Laura conferma su bio e menzione del Milanese Imbruttito prima di pubblicare.
