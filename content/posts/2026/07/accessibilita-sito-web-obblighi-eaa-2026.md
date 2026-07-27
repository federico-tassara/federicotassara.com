---
title: "Accessibilità di sito e app: cosa impone davvero la legge (e perché il widget non basta)"
date: "2026-07-27"
updatedAt: "2026-07-27"
author: "Federico Tassara"
category: "Sviluppo Web"
excerpt: "L'European Accessibility Act è in vigore dal giugno 2025, ma il 2026 è l'anno in cui AgID ha acceso i controlli: piattaforma di segnalazione attiva, regolamento sanzionatorio adottato. Due convinzioni diffuse — 'ho tempo fino al 2030' e 'il widget mi mette a posto' — sono entrambe sbagliate. Cosa serve davvero, spiegato da chi scrive il codice."
tags: ["accessibilità", "WCAG", "European Accessibility Act", "e-commerce", "compliance", "sviluppo web"]
faq:
  - q: "Il mio sito aziendale deve essere accessibile per legge?"
    a: "Dipende da cosa fa il sito, non dal fatto che esista. L'European Accessibility Act, recepito in Italia con il D.Lgs. 82/2022, copre una lista di prodotti e servizi: e-commerce, servizi bancari, trasporti, e-book, comunicazioni elettroniche, oltre a computer, dispositivi mobili ed elettronica di consumo. Un sito puramente vetrina, senza vendita online né servizi inclusi nella lista, in genere resta fuori dal perimetro EAA. Un e-commerce, anche piccolo, è dentro."
  - q: "Le piccole aziende sono esentate?"
    a: "Solo le microimprese, e solo sui servizi: meno di 10 dipendenti e fatturato o bilancio annuo non superiore a 2 milioni di euro. Sono due condizioni che vanno soddisfatte insieme. Attenzione a un equivoco frequente: l'esenzione riguarda i servizi, non i prodotti, e una PMI con 15 dipendenti e un e-commerce è pienamente obbligata."
  - q: "È vero che c'è tempo fino al 2030?"
    a: "È l'interpretazione più diffusa e più rischiosa. Il periodo transitorio della direttiva riguarda prodotti già in uso e contratti di servizio preesistenti, non i siti web in quanto tali. Soprattutto: se un servizio esistente viene aggiornato in modo significativo dopo giugno 2025, la conformità diventa immediatamente dovuta. Per un e-commerce, un restyling, un cambio di tema o CMS o una nuova funzionalità di checkout ricadono facilmente in questa casistica."
  - q: "Un widget o overlay di accessibilità mette a posto il sito?"
    a: "No, e su questo le fonti sono concordi, incluse le linee guida AgID: la conformità deve riguardare l'architettura del servizio nel suo complesso, non uno strato aggiunto sopra. Un overlay può essere un aiuto per alcuni utenti, ma non sostituisce il lavoro sul codice e non è una difesa in caso di controllo. Buona parte della verifica richiede test manuali: navigazione da tastiera, screen reader, comportamento dei componenti interattivi."
  - q: "Quanto costa adeguare un sito o un e-commerce?"
    a: "Dipende quasi esclusivamente da come è costruito. Su un progetto moderno e ben strutturato la maggior parte dei problemi si concentra su pochi punti ricorrenti — contrasto, focus da tastiera, form senza label, componenti custom senza semantica — e si chiude in tempi contenuti. Su un sito costruito a colpi di plugin o con un tema pesantemente modificato il lavoro è più profondo. La variabile che sposta di più il costo è se l'accessibilità viene affrontata durante lo sviluppo o rincorsa dopo il rilascio."
---

**TL;DR.** L'European Accessibility Act è applicabile dal **28 giugno 2025** (in Italia D.Lgs. 82/2022), ma è nel **2026** che il tema è diventato operativo: AgID ha adottato le linee guida e il regolamento sanzionatorio, e da marzo è attiva la piattaforma per segnalare i servizi non conformi.

- **Chi è dentro:** e-commerce, servizi bancari, trasporti, e-book, comunicazioni elettroniche e altri prodotti e servizi elencati dalla direttiva.
- **Chi è fuori:** microimprese sui servizi (meno di 10 dipendenti **e** massimo 2 milioni di fatturato).
- **Due miti da smontare:** "ho tempo fino al 2030" e "il widget mi mette a posto". Nessuno dei due regge.

## Perché ne parlo io (che sviluppo, non vendo overlay)

L'accessibilità digitale in Italia è raccontata quasi solo da chi vende soluzioni a pacchetto. Il risultato è un mercato in cui l'azienda media crede di potersi mettere in regola installando uno script, e scopre il contrario nel momento peggiore.

La realtà tecnica è più semplice e meno vendibile: **l'accessibilità è una proprietà del codice**. Markup semantico, gestione corretta del focus, contrasti adeguati, form etichettati, componenti interattivi che funzionano da tastiera. Se queste cose sono fatte bene, il sito è accessibile e lo si può dimostrare. Se non lo sono, nessuno strato sovrapposto le sistema.

## Cosa è cambiato nel 2026

La direttiva è applicabile dal giugno 2025, ma per quasi un anno è mancata l'infrastruttura di controllo. Nel 2026 quel vuoto si è chiuso:

- AgID ha adottato le **linee guida operative** sui requisiti di accessibilità dei servizi (determinazione n. 38/2026).
- Con la **determinazione n. 84/2026** del 15 maggio è stato adottato il regolamento che disciplina l'intero percorso sanzionatorio, dalla segnalazione alla sanzione definitiva.
- Da **marzo 2026** è attiva la piattaforma AgID attraverso cui chiunque può **segnalare un servizio non conforme**.

Quest'ultimo punto è quello che cambia davvero il calcolo del rischio. Non serve più che un'autorità ti scelga per un controllo: basta un singolo utente che non riesce a completare un acquisto e decide di segnalarlo. Agli Accessibility Days 2026 il Direttore Generale di AgID ha definito questo "l'anno dei controlli", ed è coerente con gli strumenti che sono stati messi in piedi.

L'iter non è immediato — segnalazione, fase pre-istruttoria, diffida con un termine ragionevole per adeguarsi, e sanzione solo in caso di persistente inadempienza. Ma è un iter che ora esiste e funziona. Sulle cifre le fonti divergono (si parla di ordini di grandezza tra qualche migliaio e alcune decine di migliaia di euro, con un regime specifico fino al 5% del fatturato per i soggetti sopra i 500 milioni): il numero esatto va verificato con un legale sul caso concreto, ma il punto pratico è un altro. Nel momento in cui arriva la diffida, hai un termine per adeguarti, e adeguare un sito sotto pressione costa molto più che averlo fatto bene prima.

## Il mito del 2030

È l'obiezione che sento più spesso: "so che c'è un periodo transitorio fino al 2030". Molte fonti divulgative lo presentano come una proroga generalizzata per i siti esistenti, ma il testo della direttiva parla di **prodotti** già in uso e di **contratti** di servizio preesistenti, non di siti web in quanto tali.

C'è poi una condizione che svuota il transitorio nella pratica: se un servizio esistente viene **aggiornato in modo significativo** dopo giugno 2025, la conformità diventa dovuta subito. Per un e-commerce, questo comprende un restyling, un cambio di tema o di CMS, l'introduzione di un nuovo checkout o di nuove funzionalità. In altre parole: qualunque cosa tu faccia di serio sul tuo sito nei prossimi anni, ti porta dentro il perimetro.

## Cosa guardare davvero, in ordine di frequenza

Nei progetti che vedo, i problemi si concentrano quasi sempre sugli stessi punti:

- **Contrasto insufficiente** tra testo e sfondo, specie su testi secondari, placeholder e stati disabilitati.
- **Focus da tastiera invisibile o incoerente:** l'utente non vede dove si trova, o l'ordine di tabulazione salta.
- **Form senza label associate correttamente,** con l'etichetta resa solo come placeholder o come testo vicino.
- **Componenti custom senza semantica:** dropdown, modali, tab e accordion costruiti con `div` e nessun ruolo ARIA, inutilizzabili da screen reader.
- **Immagini senza testo alternativo,** o con alternative generate automaticamente e prive di significato.
- **Contenuto dinamico che cambia senza annunciarlo:** carrello aggiornato, errori di validazione, notifiche che uno screen reader non intercetta.
- **Video senza sottotitoli** e contenuti audio senza trascrizione.

Lo standard tecnico di riferimento per la dichiarazione è **WCAG 2.1 livello AA**. Una parte della verifica è automatizzabile e va messa in pipeline, ma il resto richiede test manuali: navigazione completa da tastiera, prova con screen reader (NVDA o VoiceOver), verifica che i componenti interattivi si comportino come dichiarano.

## Gli adempimenti che si dimenticano

Oltre al codice, ci sono due obblighi documentali che spesso restano scoperti:

1. **La dichiarazione di accessibilità** (art. 15), che va compilata, pubblicata e trasmessa ad AgID.
2. **La documentazione probatoria.** Non basta essere accessibili: bisogna poterlo dimostrare, mantenendo traccia delle verifiche fatte.

C'è poi la valutazione di **onere sproporzionato**, per chi la invoca: il decreto ne prevede il rinnovo almeno ogni cinque anni, ma le linee guida AgID stringono la frequenza ad almeno annuale e comunque a ogni modifica del servizio.

## L'occasione da non sprecare

Vale la pena dirlo senza retorica: il lavoro sull'accessibilità migliora il sito anche per chi non ha disabilità. Markup semantico corretto, struttura chiara degli heading, testi alternativi sensati e navigazione da tastiera pulita sono gli stessi fattori che aiutano il posizionamento e la comprensione da parte dei motori di ricerca, come ho descritto in [Vantaggi di Next.js per SEO e performance](/blog/vantaggi-nextjs-seo-performance). Un checkout che funziona da tastiera è un checkout che perde meno utenti, punto.

Se stai per rifare o rivedere il tuo e-commerce, questo è il momento economicamente giusto per affrontarla: costruire accessibile da subito ha un costo marginale, correggere dopo il rilascio no. Lo stesso ragionamento vale sul mobile, dove le linee guida di accessibilità di iOS e Android hanno un peso analogo — un tema che tocco in [App per ecommerce con React Native](/blog/app-ecommerce-react-native).

## In sintesi

Il quadro del 2026 è chiaro: la norma c'è dal 2025, gli strumenti di controllo sono arrivati quest'anno, e chiunque può segnalare. Le due convinzioni che stanno lasciando scoperte molte aziende — il transitorio al 2030 e il widget risolutivo — non reggono alla verifica.

La cosa sensata da fare non è comprare uno strumento, ma **sapere con precisione dove sei**: quali problemi ha oggi il tuo sito, quali sono bloccanti, quanto lavoro serve per chiuderli. È lo stesso approccio dell'[audit tecnico](/blog/audit-tecnico-software-cosa-controllare), applicato a un requisito che ora ha una scadenza e un iter sanzionatorio.

Se hai un e-commerce o un servizio online e vuoi capire quanto sei distante dalla conformità — prima che te lo faccia notare una segnalazione — i servizi di [Web Development](/servizi/web-development) e [Tech Consulting](/servizi/tech-consulting) partono da qui. [Scrivimi](/contatti) e guardiamo insieme il tuo caso.
