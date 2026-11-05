# Sequenza email · Dalle slide alla scena × Laura Locatelli

**Evento:** mercoledì 25 novembre 2026, 12:00–13:00 (spostato dal 17 novembre) · Microsoft Teams · in italiano
**Landing:** https://webinar-talk-laura-locatelli.vercel.app
**Tag AC:** `[registered] 2026_11_17_TalkLaura` (già creato, id 992) · dopo il live: `[partecipated] 2026_11_17_TalkLaura`
**Giorno di invio dei rilanci:** giovedì (non più martedì/mercoledì)

Ogni email ha un angolo diverso: mai riscrivere il corpo della precedente.
Se l'email 2 ripete l'email 1, il click-to-open crolla.

| # | Codice | Quando | Da | A chi |
|---|---|---|---|---|
| 0 | Conferma | subito, automation | Laura di MLC | chi si iscrive (tag) |
| 1 | A | gio 5 nov, 09:30 | Laura di MLC | lista WEBINARS |
| 2 | R1 | gio 12 nov, 09:30 | Maurizio La Cava | WEBINARS **esclusi** gli iscritti |
| 3 | R2 | gio 19 nov, 09:30 | Laura di MLC | WEBINARS **esclusi** gli iscritti |
| 4 | 1Db · last call | mar 24 nov, 09:30 | Laura di MLC | WEBINARS **esclusi** gli iscritti |
| 5 | 1Db · link Teams | mar 24 nov, 12:00 | Laura di MLC | **solo** iscritti (tag) |
| 6 | D · mattina | mer 25 nov, 08:30 | Laura di MLC | solo iscritti |
| 7 | D · -30 min | mer 25 nov, 11:30 | Laura di MLC | solo iscritti |
| 8 | D · live | mer 25 nov, 12:00 | Laura di MLC | solo iscritti |
| 9 | Post · registrazione | gio 26 nov, 10:00 | Laura di MLC | solo iscritti |

Le email 5–9 devono essere filtrate sul tag, altrimenti il link Teams arriva a chi non è iscritto.
La 9 parte il giorno dopo il live: la registrazione è promessa in landing e in conferma.

---

## Email 0 · Conferma "Ci sei"

**Trigger:** automation `Tag is added → [registered] 2026_11_17_TalkLaura`, **Runs multiple times**.
Duplica l'automation 157 (Talk di settembre) e cambia solo il tag del trigger.
**Oggetto:** Ci sei. Mercoledì 25 novembre, ore 12.
**Preview:** Mettilo subito in calendario, il link Teams arriva il giorno prima.

HTML pronto da incollare in **`CONFIRMATION-EMAIL.html`** (blocco HTML nel designer AC):
riquadro "Segna la data" e tre bottoni calendario, Google, Outlook e Yahoo.

---

## Email 1 · Annuncio (A)
**Invio:** giovedì 5 novembre 2026, ~09:30 (20 giorni prima)
**Da:** Laura di MLC
**Oggetto:** Un'attrice che insegna a non recitare
**Preview:** Laura Locatelli è ospite del podcast MLC, live il 25 novembre.

Ciao %FIRSTNAME%,

quando dobbiamo parlare in pubblico, la prima cosa che cerchiamo sono le tecniche.
Dove metto le mani, quante pause faccio, come apro.

Funzionano. Fino al momento in cui si sentono.

Laura Locatelli fa l'attrice da più di vent'anni, e dal 2016 lavora al fianco del
Milanese Imbruttito. Da dieci anni fa anche una cosa che sembra un paradosso.
Allena manager, imprenditori e professionisti a **non recitare** quando parlano
davanti a una sala o a una webcam.

**Mercoledì 25 novembre alle 12:00** è ospite del podcast MLC. Maurizio la intervista
partendo dal suo lavoro di speaker e coach, poi la conversazione va dove deve andare.
Live, un'ora, gratis, su Teams.

**[Riserva il mio posto →]** (link alla landing)

A presto,
Laura

*P.S. Se il 25 non riesci, iscriviti lo stesso. Riceverai la registrazione.*

---

### Variante · Nuova data (se l'annuncio del 29 ottobre è già uscito)
**Invio:** giovedì 5 novembre 2026, ~09:30, al posto dell'Email 1
**Da:** Laura di MLC
**Oggetto:** Nuova data. Mercoledì 25 novembre, ore 12.
**Preview:** Il talk con Laura Locatelli si sposta di una settimana.

Ciao %FIRSTNAME%,

una piccola modifica di calendario. Il talk con **Laura Locatelli** si sposta a
**mercoledì 25 novembre, 12:00–13:00**, sempre online su Microsoft Teams.

Se avevi già segnato il 17, aggiorna la data in agenda. Se non ti sei ancora
iscritto, hai una settimana in più per farlo.

**[Riserva il mio posto →]**

Laura

*P.S. Se il 25 non riesci, iscriviti lo stesso. Riceverai la registrazione.*

---

## Email 2 · Rilancio strategico (R1)
**Invio:** giovedì 12 novembre 2026, ~09:30 (13 giorni prima)
**Da:** Maurizio La Cava
**Oggetto:** La slide era perfetta. Il problema era chi la presentava.
**Preview:** Perché ho invitato un'attrice nel podcast di MLC.

Ciao %FIRSTNAME%,

ti racconto una cosa che vedo spesso con i clienti.

Lavoriamo settimane su una presentazione. Struttura chiara, messaggio forte, slide
pulite. Poi arriva il giorno, e chi la presenta legge, si irrigidisce, corre.
La sala si spegne al terzo minuto.

Una slide fatta bene non basta. Serve qualcuno che la faccia arrivare.

Per questo ho invitato **Laura Locatelli** nel podcast MLC. Attrice da vent'anni,
coach di public speaking e video speaking: il suo metodo si chiama "Efficacemente
autentico", e parte da un'idea che condivido in pieno: le tecniche funzionano solo se
costruite sul tuo stile.

Mercoledì 25 novembre alle 12:00 le chiederò:

- perché chi prova a "fare lo speaker" finisce per sembrare finto
- cosa fa un'attrice con la paura prima di entrare in scena
- cosa cambia quando il pubblico è dietro una webcam

Un'ora live, gratis, con domande dal pubblico alla fine.

**[Riserva il mio posto →]**

Maurizio

*P.S. Non riesci a esserci live? Iscriviti comunque, riceverai la registrazione.*

---

## Email 3 · Rilancio community (R2)
**Invio:** giovedì 19 novembre 2026, ~09:30 (6 giorni prima)
**Da:** Laura di MLC
**Oggetto:** Che cosa chiederesti a Laura Locatelli?
**Preview:** Mercoledì è live. Le domande migliori le facciamo noi per te.

Ciao %FIRSTNAME%,

mercoledì alle 12:00 Maurizio intervista Laura Locatelli, e vorremmo portare in
diretta anche le tue domande.

Ti diamo un'idea con quelle che sentiamo più spesso nei nostri corsi:

- "Come faccio a non bloccarmi quando tutti mi guardano?"
- "In call parlo bene, poi accendo la webcam e divento un'altra persona. Perché?"
- "Si può essere autorevoli senza essere rigidi?"

Se ce n'è una che ti tiene sveglio prima di una presentazione, iscriviti e
**rispondi a questa email con la tua domanda**. Le più interessanti finiscono nel
podcast.

**[Riserva il mio posto e manda la tua domanda →]**

Laura

*P.S. Non ce la fai mercoledì? Iscriviti lo stesso, riceverai la registrazione.*

> Nota: se in risposta all'email di conferma arrivano domande vere, usare quelle al posto
> degli esempi (e cambiare la frase introduttiva in "Ne abbiamo già ricevute alcune").

---

## Email 4 · Last call, psicologia inversa (1Db)
**Invio:** martedì 24 novembre 2026, ~09:30 (24 ore prima)
**Da:** Laura di MLC
**Oggetto:** 3 motivi per NON venire domani
**Preview:** Sul serio. Se nessuno ti riguarda, salta pure.

Ciao %FIRSTNAME%,

domani alle 12:00 siamo live con Laura Locatelli. Prima di bloccare l'ora, tre
ottimi motivi per non farlo:

**1.** Non venire se ti va bene arrivare alla prossima presentazione con lo stomaco
chiuso. La paura, in fondo, tiene svegli.

**2.** Non venire se preferisci continuare a sembrare un'altra persona appena si
accende la webcam. Almeno è una persona diversa.

**3.** Non venire se non ti interessa sapere come lavora sul palco chi lo fa di
mestiere da vent'anni. Legittimo.

Se nessuno di questi tre ti interessa, ti consigliamo davvero di non partecipare.

Nel caso invece ti interessasse...

**[Riserva il mio posto →]**

Laura

*P.S. Se all'ultimo non riesci a esserci, niente paura. Riceverai la registrazione.*

---

## Email 5 · Reminder + link Teams (1Db)
**Invio:** martedì 24 novembre 2026, 12:00 (24 ore prima) · **solo tag**
**Da:** Laura di MLC
**Oggetto:** Domani siamo live · il link Teams è qui dentro
**Preview:** Mercoledì alle 12:00. Un clic ed entri.

Ciao %FIRSTNAME%,

breve. Domani, **mercoledì 25 novembre, 12:00–13:00**, siamo live con Laura Locatelli
e Maurizio.

**[Entra su Microsoft Teams →]** (bottone giallo, incollare il link Teams)

Mettilo in calendario così non ti scappa: usa gli stessi link della conferma
(Google, Outlook, Yahoo, in `CONFIRMATION-EMAIL.html`).

Consiglio per domani: pensa all'ultima volta che hai parlato davanti a qualcuno e
non è andata come volevi. Tienila a mente: è da lì che ascolterai meglio Laura.
Gli ultimi minuti sono per le domande.

A domani,
Laura

*P.S. Se succede qualcosa, riceverai la registrazione.*

---

## Email 6 · Giorno del live, mattina (D)
**Invio:** mercoledì 25 novembre 2026, 08:30 · **solo tag**
**Da:** Laura di MLC
**Oggetto:** Oggi alle 12:00, con Laura Locatelli
**Preview:** Il link è qui, tienilo a portata di mano.

Ciao %FIRSTNAME%,

oggi a pranzo siamo live: **12:00–13:00**, su Teams.

**[Entra su Microsoft Teams →]**

Ti consiglio di entrare 2 minuti prima, con le cuffie. Si parla di voce, ne vale la pena.

A dopo,
Laura

---

## Email 7 · Tra 30 minuti (D)
**Invio:** mercoledì 25 novembre 2026, 11:30 · **solo tag**
**Da:** Laura di MLC
**Oggetto:** Tra 30 minuti siamo live
**Preview:** Laura Locatelli e Maurizio, alle 12:00 in punto.

Ciao %FIRSTNAME%,

tra mezz'ora si parte.

**[Entra su Microsoft Teams →]**

Laura

---

## Email 8 · Siamo live (D)
**Invio:** mercoledì 25 novembre 2026, 12:00 · **solo tag**
**Da:** Laura di MLC
**Oggetto:** Siamo live, entra adesso
**Preview:** Stiamo iniziando.

Ciao %FIRSTNAME%,

siamo in onda. Laura e Maurizio stanno iniziando.

**[Entra adesso →]**

Laura

---

## Email 9 · Registrazione (post)
**Invio:** giovedì 26 novembre 2026, ~10:00 · **solo tag** (dividere con If/Else su `[partecipated]`)
**Da:** Laura di MLC
**Oggetto (chi c'era):** Grazie di esserci stato · ecco la registrazione
**Oggetto (chi non c'era):** Ieri ci sei mancato · ecco la registrazione
**Preview:** L'ora con Laura Locatelli, tutta, da rivedere quando vuoi.

Corpo breve: link alla landing in modalità post-event (video embed),
una frase sul momento più forte del talk, CTA "Guarda la registrazione →".
Da scrivere dopo il live, con un passaggio vero della conversazione.

---

## Note per il setup in ActiveCampaign

- **Tag già creato:** `[registered] 2026_11_17_TalkLaura` (id 992). Il form lo applica con la
  logica delete + re-add di `webinar-handler.js`, così il trigger "Tag is added" parte sempre.
- **Automation di conferma:** duplicare la 157, cambiare il tag del trigger, incollare l'HTML.
- Email 1–4: acquisizione, lista `WEBINARS` (id 31). Dalla 2 in poi escludere chi ha già il tag.
- Email 5–9: solo chi ha il tag `[registered] 2026_11_17_TalkLaura`.
- Bottone CTA: sfondo `#FFDB46`, testo nero, padding 14×24px, font-weight 800.
- Copy CTA: "Riserva il mio posto", non "Iscriviti gratis".
- Dopo il live: creare `[partecipated] 2026_11_17_TalkLaura` e applicarlo ai presenti (report Teams).
