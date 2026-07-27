---
title: "Il tuo MVP l'ha scritto l'AI: come si industrializza senza rifarlo da zero"
date: "2026-07-27"
updatedAt: "2026-07-27"
author: "Federico Tassara"
category: "Consulenza"
excerpt: "Funzionava, i clienti lo usano, e adesso ogni modifica rompe qualcosa. Il debito tecnico del codice generato con l'AI non è quello classico: nasce dal fatto che nessuno ha il modello mentale del sistema. Cosa controllare, cosa si recupera, cosa conviene riscrivere davvero."
tags: ["vibe coding", "debito tecnico", "AI", "MVP", "audit", "fractional CTO"]
faq:
  - q: "Il codice generato con l'AI è codice di scarsa qualità?"
    a: "Non intrinsecamente. Il consenso emerso nel settore è che l'AI amplifica chi già sa cosa sta facendo, mentre in mani inesperte produce software fragile. Il problema non è la singola funzione, che spesso è scritta bene: è la coerenza dell'insieme. Moduli che risolvono lo stesso problema in tre modi diversi, dipendenze aggiunte e mai rimosse, test che passano senza verificare nulla di significativo. Il debito nasce quando la produzione di codice supera la capacità del team di comprenderlo e governarlo."
  - q: "Come capisco se il mio prodotto ha questo problema?"
    a: "Tre segnali bastano. Primo: nessuno in azienda sa spiegare a voce come funziona una parte del sistema senza aprire il codice. Secondo: le modifiche in un punto rompono cose in punti apparentemente scollegati. Terzo: la stima di qualunque intervento è diventata inaffidabile, e piccole richieste si trasformano in settimane. Se ne riconosci due su tre, il problema non è il codice ma il modello mentale mancante."
  - q: "Conviene riscrivere tutto da zero?"
    a: "Quasi mai, e comunque non come prima mossa. La riscrittura totale ha un tasso di fallimento alto e cancella anche la conoscenza implicita contenuta nel prodotto funzionante — tutti i casi limite che qualcuno ha già risolto. Nella maggior parte dei casi conviene stabilizzare il perimetro, mettere una rete di test attorno ai flussi che generano fatturato e poi sostituire per parti. La riscrittura ha senso quando l'architettura di base impedisce fisicamente di arrivare dove devi andare."
  - q: "Ci sono rischi oltre alla manutenibilità?"
    a: "Sì, e sono i due che emergono più tardi e costano di più. Il primo è la sicurezza: credenziali finite nel repository, dipendenze non aggiornate, validazione degli input assente sui percorsi che nessuno ha rivisto. Il secondo è la proprietà intellettuale e la conformità: codice proprietario incollato nei prompt di servizi esterni, e assenza di tracciabilità su come il software è stato costruito, che diventa un problema al primo audit serio."
  - q: "Devo smettere di usare l'AI per sviluppare?"
    a: "No, sarebbe la conclusione sbagliata. La differenza tra chi ne ricava valore e chi accumula debito non sta nell'usarla o meno, ma nei vincoli attorno: specifiche scritte prima, test automatici come rete di sicurezza, analisi statica e scansione delle dipendenze in pipeline, revisione umana obbligatoria sui percorsi critici. Con quei guardrail la velocità resta, il debito no."
---

**TL;DR.** Il debito tecnico del codice generato con l'AI non è quello classico da sistema legacy. Nasce prima e per un motivo diverso: **nessuno ha il modello mentale del sistema**. Il codice è facile da produrre e costoso da mantenere, e il conto arriva al primo cliente importante.

- **I sintomi:** stime inaffidabili, modifiche che rompono cose scollegate, nessuno sa spiegare come funziona un pezzo.
- **I rischi tardivi:** sicurezza, proprietà intellettuale, tracciabilità in caso di audit.
- **La mossa giusta:** quasi mai riscrivere tutto. Stabilizzare, coprire con test i flussi che fanno fatturato, sostituire per parti.

## Perché ne parlo io

Negli ultimi mesi questa è diventata una delle richieste più frequenti che ricevo, e arriva quasi sempre con le stesse parole: *"abbiamo costruito il prodotto molto in fretta, funziona, ma adesso non riusciamo più a farlo evolvere"*.

È una situazione nuova solo nella causa, non negli effetti. E ha un aspetto positivo che chi ci si trova dentro tende a sottovalutare: **hai un prodotto che funziona e che qualcuno usa**. Sei molto più avanti di chi ha passato sei mesi a progettare senza validare niente. Il problema è circoscritto e ha una soluzione ordinata.

## Perché questo debito è diverso da quello classico

Il debito tecnico tradizionale si accumula per compromessi consapevoli: sappiamo che quella scorciatoia va ripagata, l'abbiamo presa per una ragione, e da qualche parte c'è qualcuno che se lo ricorda. È il tipo di debito che ho descritto in [Riscrivere una piattaforma da zero](/blog/riscrivere-piattaforma-zero).

Il debito da codice generato ha un'origine diversa: si accumula quando la **velocità di produzione supera la velocità di comprensione**. Nessuno ha preso una decisione sbagliata, semplicemente nessuno ha preso una decisione. Il risultato ha caratteristiche riconoscibili:

- **Pattern incoerenti tra moduli.** La stessa cosa risolta in tre modi diversi in tre punti diversi, perché ogni sessione di generazione partiva da un contesto differente.
- **Duplicazione diffusa.** Logica ricopiata invece che estratta, perché per il modello era la via più breve.
- **Dipendenze accumulate.** Librerie aggiunte per risolvere un problema puntuale e mai rimosse, ognuna con la propria superficie di rischio.
- **Test che sembrano copertura ma non lo sono.** Suite verdi che verificano che il codice faccia quello che fa, non quello che deve fare.
- **Astrazioni assenti o premature.** O tutto inline, o strati di indirezione costruiti per un'esigenza che non si è mai presentata.

Nessuno di questi problemi è drammatico da solo. Insieme producono un sistema che nessuno riesce a tenere in testa, ed è quello il vero costo.

## I tre segnali che sei in questa situazione

1. **Nessuno sa spiegare a voce come funziona una parte del sistema** senza aprire il codice e leggerlo.
2. **Le modifiche hanno effetti a distanza.** Tocchi il checkout e si rompe l'export. Nessuno riesce a prevedere cosa si romperà.
3. **Le stime sono diventate inaffidabili.** Una richiesta che sembra da due giorni ne prende dieci, e non c'è un motivo ricorrente.

Due su tre bastano. Sono tutti sintomi della stessa causa: il modello mentale del sistema non esiste in nessuna testa.

## I due rischi che emergono tardi

Oltre alla manutenibilità, ce ne sono due che restano invisibili finché non diventano costosi.

**Sicurezza.** Le ricorrenze sono sempre le stesse: credenziali finite nel repository, validazione degli input assente sui percorsi che nessuno ha rivisto, dipendenze mai aggiornate, permessi troppo larghi perché era il modo più veloce per far funzionare la cosa. Sono problemi che una scansione automatica trova in poche ore — se qualcuno la esegue.

**Proprietà intellettuale e tracciabilità.** Codice proprietario incollato nei prompt di servizi esterni espone l'IP aziendale senza che nessuno l'abbia deciso. E l'assenza di tracciabilità su come il software è stato costruito diventa un ostacolo concreto al primo audit serio, che di solito arriva insieme al primo cliente enterprise o a una due diligence. Se poi il prodotto ha funzionalità AI rivolte agli utenti, si somma il fronte normativo di cui ho scritto in [AI Act: cosa scatta il 2 agosto 2026](/blog/ai-act-2-agosto-2026-cosa-cambia-software).

C'è infine un terzo fronte, meno discusso: **l'accessibilità**. Più la barriera tecnica si abbassa, più interfacce entrano in produzione senza mai essere validate da tastiera o con uno screen reader — con le implicazioni normative che ho descritto in [Accessibilità di sito e app](/blog/accessibilita-sito-web-obblighi-eaa-2026).

## Come si industrializza, in ordine

L'istinto è riscrivere. Quasi sempre è la mossa sbagliata: la riscrittura totale ha un tasso di fallimento alto e butta via anche la conoscenza implicita che il prodotto funzionante contiene — tutti i casi limite che qualcuno ha già incontrato e risolto senza documentarli. La sequenza che funziona è un'altra:

1. **Ferma l'emorragia.** Prima di sistemare, smetti di peggiorare: nessuna nuova funzionalità entra senza revisione umana. È la decisione più impopolare e la più efficace.
2. **Mappa il sistema per davvero.** Cosa c'è, cosa chiama cosa, dove sono i dati, quali sono i tre flussi da cui dipende il fatturato. Serve un documento, non una conversazione.
3. **Metti una rete sotto i flussi critici.** Test end-to-end sui percorsi che generano ricavi. Non copertura totale: copertura dove fa male.
4. **Passa gli strumenti automatici.** Analisi statica, scansione delle dipendenze, ricerca di credenziali nella storia del repository. È la fase con il miglior rapporto tra sforzo e risultato.
5. **Consolida i pattern, un dominio alla volta.** Scegli il modo corretto di fare una cosa e allinea il resto progressivamente, partendo dai punti che si toccano più spesso.
6. **Sostituisci per parti, se serve.** Adesso — e solo adesso — puoi valutare se un modulo va riscritto, con una rete di test che ti dice se hai rotto qualcosa.

Le fasi 1-4 producono la maggior parte del beneficio e si misurano in settimane, non in mesi. È lo stesso principio dell'[audit tecnico](/blog/audit-tecnico-software-cosa-controllare): prima sapere con precisione dove sei, poi decidere.

## Come continuare a usare l'AI senza ricreare il problema

La conclusione sbagliata sarebbe smettere. Chi ne ricava valore e chi accumula debito usano gli stessi strumenti: la differenza sta nei vincoli attorno.

- **Specifiche prima del codice.** Descrivere cosa deve fare e quali sono i vincoli, prima di generare. Il tempo speso qui si recupera moltiplicato.
- **Regole di progetto scritte e versionate.** Convenzioni, pattern ammessi, struttura attesa, in un file che vive nel repository e che ogni sessione di lavoro carica come contesto.
- **Test e pipeline come rete di sicurezza,** non come adempimento finale.
- **Revisione umana obbligatoria sui percorsi critici.** Autenticazione, pagamenti, dati personali: qui nessuno approva senza aver letto.
- **Una persona responsabile dell'architettura.** Non di scrivere tutto il codice: di sapere come sta insieme. È esattamente il vuoto che un [fractional CTO](/blog/cosa-fa-fractional-cto) riempie in questa fase.

## In sintesi

Avere un prodotto costruito in fretta con l'AI non è un errore da rimediare, è una fase da attraversare con metodo. Il debito non sta nel codice generato in sé, ma nel fatto che nessuno possiede più il modello mentale del sistema — e quello si ricostruisce, senza buttare via ciò che funziona e senza fermare lo sviluppo per sei mesi.

Se ti riconosci nei segnali di questo articolo, il passo utile è capire con precisione dove sei prima di decidere cosa fare: i servizi di [Tech Consulting](/servizi/tech-consulting) e [Architettura & Scalabilità](/servizi/architettura-e-scalabilita) partono da qui. [Scrivimi](/contatti) e guardiamo insieme il tuo caso.
