---
title: "AI Act: cosa scatta davvero il 2 agosto 2026 (e cosa è stato rinviato)"
date: "2026-07-27"
updatedAt: "2026-07-27"
author: "Federico Tassara"
category: "AI & Automazioni"
excerpt: "Il Digital Omnibus ha rinviato gli obblighi sui sistemi ad alto rischio, e mezzo mercato ha capito 'liberi tutti'. Non è così: dal 2 agosto 2026 si applicano gli obblighi di trasparenza e diventa operativo il regime sanzionatorio. Cosa significa concretamente per il software che hai in azienda, spiegato da chi lo costruisce."
tags: ["AI Act", "compliance", "intelligenza artificiale", "PMI", "normativa", "AI"]
faq:
  - q: "Il Digital Omnibus ha rinviato tutto l'AI Act?"
    a: "No, ed è il malinteso più diffuso di questa estate. Il Digital Omnibus ha spostato in avanti gli obblighi per i sistemi ad alto rischio: quelli dell'Allegato III (credito, assicurazioni, infrastrutture critiche, selezione del personale) al 2 dicembre 2027, quelli integrati in prodotti dell'Allegato I (dispositivi medici, macchinari, giocattoli, ascensori) al 2 agosto 2028. Non ha toccato gli obblighi di trasparenza dell'articolo 50, che restano applicabili dal 2 agosto 2026, né i divieti e gli obblighi di alfabetizzazione già in vigore dal 2025."
  - q: "La mia azienda usa solo ChatGPT e un chatbot sul sito. Sono comunque coinvolto?"
    a: "Molto probabilmente sì, come 'deployer' (utilizzatore). L'obbligo più immediato è di trasparenza: chi interagisce con un sistema AI deve saperlo. Un chatbot sul sito che non dichiara di essere un'AI è il caso più semplice e più diffuso di non conformità. Se pubblichi testi generati dall'AI per informare il pubblico senza revisione umana, o immagini e video manipolati, scattano obblighi di dichiarazione ed etichettatura."
  - q: "Qual è la differenza tra provider e deployer, e perché mi riguarda?"
    a: "Il provider sviluppa e immette sul mercato il sistema AI, il deployer lo usa sotto la propria autorità. La distinzione conta perché gli obblighi del provider sono molto più pesanti. Il punto critico: se prendi un modello di terze parti, lo integri nel tuo prodotto e lo distribuisci con il tuo marchio, in diversi casi diventi tu il provider agli occhi del Regolamento. Molte aziende che si considerano semplici utilizzatori sono in realtà nella seconda categoria senza saperlo."
  - q: "Quali sono le sanzioni e da quando si applicano?"
    a: "L'articolo 99 prevede tre livelli: fino a 35 milioni di euro o il 7% del fatturato mondiale annuo per le pratiche vietate, fino a 15 milioni o il 3% per la violazione degli altri obblighi (inclusi quelli del deployer), fino a 7,5 milioni per informazioni false o fuorvianti alle autorità. Il punto rilevante del 2 agosto 2026 è che il sistema di vigilanza nazionale diventa pienamente operativo: in Italia la vigilanza è affidata all'Agenzia per la Cybersicurezza Nazionale, con AgID come autorità di notifica (legge 132/2025)."
  - q: "Cosa devo cambiare concretamente nel mio software?"
    a: "Le cose più frequenti sono quattro: un avviso chiaro dove l'utente interagisce con un'AI; l'etichettatura dei contenuti generati o manipolati, anche in formato leggibile dalle macchine; un punto di revisione umana dove il sistema pubblica o decide senza controllo; e un log delle decisioni automatizzate che permetta di ricostruire cosa è successo e perché. Sono interventi tecnici, non documentali, e nella maggior parte dei casi si misurano in giorni, non in mesi."
---

**TL;DR.** Il Digital Omnibus ha rinviato gli obblighi sui sistemi ad **alto rischio**, non l'intero AI Act. Dal **2 agosto 2026** si applicano gli **obblighi di trasparenza dell'articolo 50** e il sistema di vigilanza nazionale diventa pienamente operativo. Per il software che hai in azienda questo significa interventi concreti e per lo più rapidi.

- **Cosa scatta ora:** trasparenza su chatbot, contenuti generati, deepfake e testi pubblicati senza revisione umana.
- **Cosa è rinviato:** alto rischio Allegato III al 2 dicembre 2027, Allegato I al 2 agosto 2028.
- **Prossima tappa:** 2 dicembre 2026, etichettatura leggibile dalle macchine per i sistemi già sul mercato.

## Perché ne parlo io (che scrivo software, non pareri legali)

Metà di quello che l'AI Act chiede in questa fase non si risolve con un documento: si risolve **modificando il prodotto**. Un avviso nell'interfaccia, un'etichetta sui contenuti generati, un punto in cui un umano approva prima della pubblicazione, un log che permetta di ricostruire una decisione automatica. Sono modifiche al software, e chi conosce com'è fatto il tuo sistema può dirti in mezza giornata quali sono già coperte e quali no.

Detto chiaramente: non sono un avvocato e questo articolo non è un parere legale. Sulla classificazione del rischio e sul perimetro serve un consulente specializzato. Quello che posso dirti con precisione è **cosa va toccato nel codice** una volta che il perimetro è chiaro.

## Il malinteso del momento: "hanno rinviato tutto"

Il Digital Omnibus è stato adottato in via definitiva a fine giugno 2026, e il messaggio arrivato al mercato è stato semplificato in "l'AI Act slitta". È una lettura pericolosa, perché quello che è slittato è una parte precisa e quello che resta è proprio la parte che tocca la maggioranza delle aziende.

**Rinviato:**

- Sistemi ad alto rischio **stand-alone** (Allegato III — credito, assicurazioni, infrastrutture critiche, selezione e gestione del personale): **2 dicembre 2027**.
- Sistemi ad alto rischio **integrati in prodotti** (Allegato I — dispositivi medici, macchinari, giocattoli, ascensori): **2 agosto 2028**.
- Sandbox normative nazionali: **2 agosto 2027**.

**Non rinviato:**

- **Obblighi di trasparenza (art. 50): 2 agosto 2026.**
- Divieti sulle pratiche vietate e obbligo di alfabetizzazione AI del personale (art. 4): **già in vigore dal 2025**.
- Piena operatività delle autorità nazionali di vigilanza e del regime sanzionatorio.

Il paradosso è che le aziende toccate dalla parte rinviata sono relativamente poche e in genere già strutturate. Le aziende toccate dalla parte **non** rinviata sono quasi tutte quelle che hanno messo un chatbot sul sito o generano contenuti con l'AI.

## Cosa chiede davvero l'articolo 50

La trasparenza dell'articolo 50 si traduce in quattro situazioni concrete. Chi mette a disposizione o utilizza il sistema deve informare le persone quando:

1. **Interagiscono direttamente con un sistema AI.** Il caso classico: assistente virtuale, chatbot di supporto, agente che risponde alle email. L'utente deve sapere che dall'altra parte non c'è una persona.
2. **Sono esposte a riconoscimento delle emozioni o categorizzazione biometrica.** Meno diffuso, ma presente in alcune soluzioni di analytics e retail.
3. **Vengono pubblicati deepfake o contenuti generati o manipolati** con l'AI. Vanno dichiarati come tali.
4. **Viene pubblicato testo generato dall'AI per informare il pubblico** su temi di interesse pubblico, senza revisione umana o controllo editoriale.

Il quarto punto merita attenzione da chiunque produca contenuti con l'AI: la scriminante è la **revisione umana**. Un testo generato e poi rivisto e assunto in responsabilità da una persona è un'altra cosa rispetto a un testo pubblicato in automatico.

C'è poi una scadenza ravvicinata da segnare: il **2 dicembre 2026** entra l'obbligo di **etichettatura leggibile dalle macchine** (watermarking) dei contenuti generati dall'AI per i sistemi già sul mercato. È un requisito tecnico, non redazionale: l'etichetta visibile non basta, il marcatore deve essere nel file.

## La trappola: sei sicuro di essere solo un utilizzatore?

Il Regolamento distingue tra **provider** (chi sviluppa e immette sul mercato) e **deployer** (chi usa il sistema sotto la propria autorità). Gli obblighi del provider sono nettamente più pesanti, e quasi tutte le PMI si collocano istintivamente nella seconda categoria.

Il punto critico è che la distinzione non dipende da chi ha addestrato il modello. Se prendi un modello di terze parti, lo integri nel tuo prodotto, lo personalizzi e lo distribuisci **con il tuo marchio**, in diversi casi il Regolamento ti considera provider. È una situazione tutt'altro che rara: è esattamente ciò che succede quando una software house costruisce una funzionalità AI dentro un gestionale, o quando un'azienda mette in commercio un assistente basato su API esterne.

Se stai valutando di costruire funzionalità di questo tipo, conviene chiarire il proprio ruolo **prima** di progettare, non dopo: ne ho parlato dal lato tecnico in [Prototipare velocemente una funzionalità AI in un'app esistente](/blog/prototipare-funzionalita-ai-app), e la governance è uno dei temi che affronto in [Agenti AI per PMI](/blog/agenti-ai-pmi-cosa-sono-da-dove-partire).

## Cosa fare adesso, in ordine

1. **Mappa dove c'è AI nei tuoi sistemi.** Non solo i progetti dichiarati: conta anche il chatbot installato due anni fa, il plugin di generazione testi del CMS, la funzione di scoring nel CRM. Quasi sempre la mappa reale è più ampia di quella percepita.
2. **Classifica il tuo ruolo per ciascun sistema:** provider o deployer. Qui serve il consulente legale.
3. **Chiudi i gap di trasparenza.** Sono i più rapidi e i più visibili: avviso sul chatbot, etichettatura dei contenuti, dichiarazione sui testi pubblicati senza revisione.
4. **Verifica il logging.** Se domani devi dimostrare come il sistema è arrivato a una decisione, i log attuali te lo permettono? Nella maggior parte dei software che vedo, la risposta è no.
5. **Forma il personale.** L'obbligo di alfabetizzazione AI è già in vigore ed è quello che si dimentica più spesso.
6. **Metti a calendario il 2 dicembre 2026** per il watermarking machine-readable.

Se leggi questa lista e non sai rispondere per i tuoi sistemi, è la stessa situazione in cui un [audit tecnico del software](/blog/audit-tecnico-software-cosa-controllare) risponde alla domanda giusta: non "il codice è scritto bene?", ma "questo sistema regge i requisiti che sto per dover rispettare?".

## In sintesi

L'AI Act non è slittato: è slittata la sua parte più pesante, mentre quella che tocca il maggior numero di aziende entra in applicazione il 2 agosto 2026. La buona notizia è che gli interventi richiesti in questa fase sono per lo più circoscritti e tecnici — avvisi, etichette, punti di revisione umana, log — e si chiudono in tempi brevi se si sa dove mettere le mani.

Vale la stessa logica della [NIS2](/blog/nis2-software-azienda-cosa-controllare): la compliance costa molto meno quando la incorpori nella progettazione invece di rincorrerla dopo una segnalazione. Se vuoi capire quali dei tuoi sistemi sono coinvolti e cosa va modificato, i servizi di [Tech Consulting](/servizi/tech-consulting) e [Automazioni](/automazione-processi-aziendali) partono esattamente da qui.

Hai AI dentro il tuo prodotto o nei tuoi processi e non sai a che punto sei? [Scrivimi](/contatti) e facciamo il punto sul tuo caso concreto.
