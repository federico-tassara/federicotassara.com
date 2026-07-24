---
title: "NIS2 e il software della tua azienda: cosa cambia davvero (e cosa controllare)"
date: "2026-07-24"
updatedAt: "2026-07-24"
author: "Federico Tassara"
category: "Consulenza"
excerpt: "La NIS2 entra nel vivo con la scadenza delle misure a fine ottobre 2026. Cosa comporta concretamente per il software e i fornitori della tua azienda, cosa devi controllare adesso e come non arrivare impreparato. Guida pratica dal punto di vista di chi il software lo costruisce."
tags: ["NIS2", "cybersecurity", "compliance", "sicurezza", "PMI", "audit"]
faq:
  - q: "La mia PMI rientra negli obblighi NIS2?"
    a: "Molte aziende concludono di essere fuori perimetro e scoprono poi il contrario, anche tramite i questionari dell'ACN. La NIS2 copre settori 'essenziali' e 'importanti' (energia, trasporti, sanità, digitale, manifatturiero critico, e le loro filiere) sopra certe soglie dimensionali, ma il perimetro si estende anche attraverso la catena di fornitura: se sei fornitore critico di un soggetto obbligato, gli obblighi ti raggiungono per contratto. Il primo passo è un'analisi seria del perimetro, non un'autovalutazione a occhio."
  - q: "Quali sono le scadenze NIS2 nel 2026?"
    a: "La scadenza operativa chiave è il 31 ottobre 2026 per l'implementazione delle misure di sicurezza previste. La registrazione al portale ACN e la comunicazione dei dati sono a monte e vanno completate prima. Le fonti raccomandano di essere operativi già dalla tarda estate, perché adeguare processi e software richiede settimane, non giorni."
  - q: "Cosa deve fare concretamente il software aziendale per essere conforme?"
    a: "Le misure obbligatorie toccano direttamente il software: autenticazione a più fattori (MFA), gestione degli accessi con privilegi minimi, backup immutabili, logging e tracciamento degli eventi, gestione delle vulnerabilità con vulnerability assessment periodico, e la capacità di rilevare e notificare un incidente all'ACN entro 24 ore. Se il tuo gestionale o la tua piattaforma custom non supportano MFA, non producono log affidabili o non hanno un piano di backup verificato, quelle sono le prime lacune da chiudere."
  - q: "La NIS2 riguarda anche i miei fornitori di software?"
    a: "Sì, ed è uno dei punti più sottovalutati. La direttiva richiede di mantenere un registro dei fornitori critici, inserire clausole di cybersicurezza nei contratti e verificare periodicamente il loro livello di sicurezza. Se un tuo fornitore software ha una falla, il rischio ricade su di te. Chi sviluppa o mantiene il tuo software rientra a pieno titolo in questa valutazione."
  - q: "Quanto costa adeguarsi e ci sono incentivi?"
    a: "Il costo dipende da quanto sei già maturo: chi ha lavorato seriamente sul GDPR parte da una base solida e il salto è contenuto; chi parte da zero deve mettere in conto un progetto strutturato. Le sanzioni per l'inadempienza sono pesanti, quindi il confronto giusto è tra il costo dell'adeguamento e quello del rischio. Sul fronte incentivi, nel 2026 esistono voucher per cloud e cybersecurity che possono coprire parte dell'investimento."
---

**TL;DR.** La NIS2 non è "roba da grandi aziende": il suo perimetro si estende **attraverso la catena di fornitura**, e la scadenza per implementare le misure di sicurezza è il **31 ottobre 2026**. Per il tuo software questo significa cose molto concrete — MFA, gestione accessi, backup immutabili, logging, notifica incidenti in 24 ore — e una verifica dei fornitori che sviluppano o mantengono i tuoi sistemi.

- **Primo passo:** verificare seriamente se rientri nel perimetro (l'autovalutazione a occhio è l'errore più comune).
- **Sul software:** MFA, privilegi minimi, backup verificati, log affidabili, capacità di rilevare e notificare incidenti.
- **Sui fornitori:** registro dei fornitori critici, clausole contrattuali, verifiche periodiche.

## Perché ne parlo io (che sviluppo software, non vendo compliance)

La NIS2 viene raccontata quasi sempre come tema legale o di sicurezza IT. Ma metà degli obblighi si traducono in **requisiti sul software** che usi ogni giorno: se il tuo gestionale non fa MFA, se la tua piattaforma custom non produce log affidabili, se nessuno ha mai verificato davvero che i backup si possano ripristinare, quelle sono lacune tecniche prima che documentali. Chi conosce come è fatto il tuo software è nella posizione giusta per dirti quali di questi obblighi sono già coperti e quali richiedono interventi. Non ti serve solo un consulente che ti spiega la norma: ti serve qualcuno che sappia leggere il tuo sistema alla luce della norma.

## Il primo errore: pensare di essere fuori perimetro

Molte PMI concludono di non essere soggette alla NIS2 e scoprono il contrario, a volte solo quando arriva un questionario dell'ACN o una richiesta da un cliente più grande. Il motivo è che il perimetro non dipende solo dal tuo settore e dalla tua dimensione: si estende lungo la **catena di fornitura**. Se sei fornitore critico di un soggetto obbligato, i suoi obblighi diventano i tuoi, per contratto. Ecco perché il primo passo non è comprare strumenti, ma fare un'analisi onesta del perimetro. Sbagliarla in difetto è il rischio più costoso.

## Cosa cambia concretamente per il tuo software

Le misure obbligatorie previste dal recepimento italiano toccano direttamente il livello tecnico. Le principali che ricadono sul software:

- **Autenticazione a più fattori (MFA)** su accessi e sistemi sensibili.
- **Gestione degli accessi con privilegi minimi:** ogni utente e ogni servizio accede solo a ciò che gli serve.
- **Backup immutabili e verificati:** non basta fare backup, bisogna dimostrare che si ripristinano.
- **Logging e tracciabilità:** eventi registrati in modo affidabile, per accorgersi di un incidente e ricostruirlo.
- **Gestione delle vulnerabilità:** vulnerability assessment periodico e aggiornamento delle dipendenze.
- **Rilevazione e notifica incidenti:** preallarme all'ACN entro 24 ore, notifica completa entro 72 ore, relazione finale entro un mese.

Se leggi questa lista e non sai rispondere per il tuo gestionale o la tua piattaforma, sei nella situazione in cui un [audit tecnico del software](/blog/audit-tecnico-software-cosa-controllare) risponde alla domanda giusta: non "il codice è bello?", ma "questo sistema regge i requisiti che sto per dover rispettare?".

## Il punto cieco: i tuoi fornitori software

L'aspetto più sottovalutato della NIS2 è la responsabilità sulla **supply chain**. La direttiva richiede di mantenere un registro aggiornato dei fornitori critici, inserire clausole di cybersicurezza nei contratti e condurre verifiche periodiche sul loro livello di sicurezza. In pratica: se chi ha sviluppato la tua piattaforma, chi la mantiene o chi ospita i tuoi dati ha una falla, il rischio ricade su di te. Questo cambia il modo in cui scegli e gestisci i fornitori tecnici — ed è un'ottima ragione per pretendere trasparenza da chiunque tocchi il tuo software. Su come porre le domande giuste a chi sviluppa per te, ho scritto in [Cosa chiedere a uno sviluppatore prima di iniziare un progetto](/blog/cosa-chiedere-sviluppatore-progetto): con la NIS2, quelle domande includono ora anche la sicurezza.

## Cosa fare adesso, in ordine

Con la scadenza delle misure al **31 ottobre 2026** e la raccomandazione di essere operativi già dalla tarda estate, il tempo utile è ora. Un ordine sensato:

1. **Verifica il perimetro.** Rientri direttamente o tramite la filiera? Non tirare a indovinare.
2. **Registrati sul portale ACN** e completa le comunicazioni dovute, dove applicabile.
3. **Fotografa lo stato del tuo software** rispetto alle misure: cosa è già coperto, cosa manca, con che priorità.
4. **Mappa i fornitori critici** e apri con loro il discorso sicurezza.
5. **Chiudi le lacune per gravità,** partendo da MFA, backup verificati e logging — le più impattanti e spesso le più rapide.

Chi ha già investito seriamente sul GDPR parte avvantaggiato: molte fondamenta sono le stesse. Il salto esiste, ma è molto più corto che partire da zero.

## In sintesi

La NIS2 trasforma la sicurezza da buona pratica facoltativa a requisito con scadenza e sanzioni, e buona parte del lavoro ricade sul software e sui fornitori software. Il confronto giusto non è "quanto costa adeguarsi" ma "quanto costa il rischio di non farlo" — considerando che nel 2026 esistono anche voucher per cloud e cybersecurity che possono coprire parte della spesa. Il modo più economico di affrontarla è sapere con precisione dove sei oggi, ed è esattamente ciò che offre una valutazione tecnica indipendente: i servizi di [Tech Consulting](/servizi/tech-consulting) e [Architettura & Scalabilità](/servizi/architettura-e-scalabilita) partono da qui.

Se vuoi capire dove il tuo software è già in regola e dove no — prima che te lo chieda un cliente o l'ACN — [scrivimi qui](/contatti) e facciamo il punto sul tuo caso.
