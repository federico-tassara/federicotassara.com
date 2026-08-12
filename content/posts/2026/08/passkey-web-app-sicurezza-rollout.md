---
title: "Passkey nelle web app: sicurezza, UX e rollout"
date: "2026-08-12"
updatedAt: "2026-08-12"
author: "Federico Tassara"
category: "Sviluppo web"
excerpt: "Come funzionano le passkey, cosa deve verificare il backend e come introdurle in una web app senza creare problemi di accesso e recupero account."
tags: ["passkey", "WebAuthn", "autenticazione", "passwordless", "sicurezza", "web app", "backend"]
---

Implementare la chiamata WebAuthn è la parte breve. I problemi arrivano quando un utente cambia telefono, perde l'unico dispositivo registrato o contatta l'assistenza per recuperare l'account. Una **passkey** è davvero più sicura della password solo se questi percorsi non diventano una scorciatoia per aggirarla.

Il meccanismo usa una coppia di chiavi legata al sito o all'app. La chiave privata resta nel dispositivo o nel gestore di credenziali; il backend conserva quella pubblica e verifica una firma su una challenge nuova a ogni accesso. Un furto del database non consegna all'attaccante un segreto riutilizzabile e il vincolo al dominio protegge dal phishing classico.

“Login con impronta o volto” descrive bene il gesto, non ciò che avviene. Biometria e PIN sbloccano la credenziale sul dispositivo; il sito non riceve impronta, volto o codice di sblocco.

La [documentazione Google sulle passkey](https://developers.google.com/identity/passkeys?hl=it) chiarisce due proprietà decisive: il server salva una chiave pubblica e la credenziale funziona soltanto per il sito o l'app per cui è stata creata. Per una web app può voler dire meno phishing, meno reset password e accessi più rapidi. Richiede però di riprogettare una parte delicata del prodotto, ben oltre la schermata di login.

## Che cos'è una passkey

Una passkey è una credenziale basata sugli standard FIDO e WebAuthn. Durante la registrazione, un autenticatore genera una coppia crittografica:

- la **chiave privata** rimane protetta dall'autenticatore o dal gestore di passkey;
- la **chiave pubblica** viene inviata al servizio e associata all'account;
- un identificatore consente al sistema di ritrovare la credenziale corretta.

L'autenticatore può essere integrato nel dispositivo, come lo sblocco dello smartphone o del computer, oppure esterno, come una chiave hardware. Alcune passkey sono sincronizzate dal gestore di credenziali tra dispositivi dello stesso utente; altre restano legate a un dispositivo.

L'applicazione non dovrebbe promettere “funziona sempre su tutti i tuoi dispositivi” senza conoscere il tipo di credenziale e l'ecosistema usato. La portabilità è migliorata, ma recovery e scenari cross-device devono comunque essere provati.

## Come funziona la registrazione

La registrazione di una passkey, chiamata anche registration ceremony, coinvolge backend, browser o app e autenticatore.

1. L'utente dimostra di controllare l'account con un metodo già affidabile.
2. Il backend genera una challenge casuale, monouso e con scadenza breve.
3. Il frontend chiama l'API WebAuthn con le opzioni ricevute.
4. Browser e sistema operativo mostrano l'interfaccia di creazione.
5. L'autenticatore genera la coppia di chiavi e firma i dati della registrazione.
6. Il frontend invia la risposta al backend.
7. Il backend verifica challenge, origine, Relying Party ID e proprietà richieste.
8. Se tutto è valido, salva chiave pubblica e metadati della credenziale.

La [specifica WebAuthn Level 3 del W3C](https://www.w3.org/TR/webauthn-3/) definisce le operazioni che una Relying Party deve eseguire per ottenere le garanzie di sicurezza del protocollo. Copiare il payload ricevuto nel database senza completare le verifiche server-side produce un login che sembra moderno ma non rispetta il modello di fiducia.

La challenge impedisce di riutilizzare una risposta precedente. L'origine lega la richiesta al contesto web previsto. Il Relying Party ID definisce il dominio per cui la credenziale può essere usata. Sono controlli distinti e tutti necessari.

## Come funziona l'accesso

Durante l'autenticazione il backend crea una nuova challenge. Il browser chiede all'autenticatore di usare una credenziale valida per quella Relying Party; l'utente autorizza l'operazione sbloccando il dispositivo; l'autenticatore firma la challenge e i dati collegati alla richiesta.

Il backend verifica almeno:

- che challenge e transazione coincidano;
- che la challenge non sia scaduta o già usata;
- che origine e Relying Party ID siano quelli attesi;
- che la credenziale appartenga all'account corretto;
- che la firma sia valida con la chiave pubblica salvata;
- che i flag di presenza e verifica dell'utente rispettino la policy;
- che eventuali contatori o segnali dell'autenticatore siano coerenti.

Solo dopo queste verifiche crea la sessione. La passkey autentica l'utente; cookie, token, scadenza, revoca e permessi continuano a essere responsabilità dell'applicazione. Come per la [gestione dei ruoli in React](/blog/gestione-autenticazione-ruoli-react), la decisione finale deve vivere nel backend.

## Perché resiste al phishing

Una password può essere digitata su un sito falso. Una passkey è vincolata alla Relying Party per cui è stata creata. Browser e sistema operativo partecipano alla verifica del dominio e non mettono la credenziale a disposizione di un'origine arbitraria.

Questo elimina una classe importante di attacchi basati sulla raccolta delle credenziali. Non elimina però:

- una sessione già rubata;
- malware con controllo del dispositivo;
- account recovery debole;
- autorizzazioni errate nel backend;
- social engineering verso l'assistenza;
- dipendenze o script compromessi nell'origine legittima.

“Phishing-resistant” non significa “account impossibile da compromettere”. Significa che il segreto di autenticazione non può essere copiato e riutilizzato nello stesso modo di una password.

## Cosa viene salvato sul server

Per ogni credenziale il backend conserva normalmente identificatore, chiave pubblica, account associato e metadati necessari alla verifica e alla gestione. Può inoltre registrare nome scelto dall'utente, data di creazione, ultimo utilizzo e trasporti dichiarati dal client.

Il server non riceve la chiave privata e non riceve i dati biometrici. Google sottolinea che impronta e volto restano sul dispositivo: servono a sbloccare la credenziale, non vengono trasmessi all'applicazione.

Questo riduce l'impatto di una violazione del database di autenticazione. Rubare chiavi pubbliche non permette di firmare nuove challenge. Rimangono comunque sensibili account, sessioni, email, token di recupero e log; la sicurezza del sistema non si esaurisce nella tabella delle passkey.

## Passkey sincronizzate e legate al dispositivo

Non tutte le implementazioni hanno lo stesso equilibrio tra comodità e controllo.

| Tipo | Vantaggio | Limite |
|---|---|---|
| Passkey sincronizzata | Segue l'utente su più dispositivi dello stesso ecosistema | Dipende dal gestore e dal recupero del suo account |
| Passkey legata al dispositivo | Maggiore controllo sul singolo autenticatore | Richiede registrazione e recovery più espliciti |
| Chiave hardware | Buona separazione e portabilità controllata | Costo, distribuzione e rischio di smarrimento |

Per un prodotto consumer, la sincronizzazione riduce attrito. Per amministratori, personale interno o ambienti regolamentati, passkey device-bound e chiavi hardware possono essere preferibili. La scelta dipende dal modello di rischio, non dalla tecnologia più recente.

Ogni account dovrebbe accettare più credenziali: telefono, computer e magari una chiave di riserva. Con una sola passkey registrata, lo smarrimento del dispositivo finisce inevitabilmente sull'assistenza.

## Il recupero account è parte dell'autenticazione

Una passkey forte con un recupero debole protegge soltanto il percorso principale. Se basta conoscere email e data di nascita per ottenere un link di reset, l'attaccante ignorerà WebAuthn e userà il canale più semplice.

Le [indicazioni FIDO per il deployment delle passkey](https://fidoalliance.org/wp-content/uploads/2024/05/Synced-Passkey-Deployment_-Emerging-Practices-for-Consumer-Use-Cases_2024-May-31.pdf) evidenziano che recovery e accessibilità devono essere progettati insieme al login. Una strategia può combinare:

- più passkey registrate;
- recupero tramite un dispositivo già autenticato;
- codici di recupero generati in anticipo;
- identità federata già protetta;
- verifica assistita per account di alto valore;
- periodo di raffreddamento prima di operazioni sensibili.

Un forum e un pannello che gestisce pagamenti non possono avere la stessa procedura. Inoltre, recuperare l'accesso non deve per forza riabilitare subito ogni azione: dopo un recovery ad alto rischio si possono bloccare temporaneamente modifiche sensibili.

## Come introdurre le passkey senza migrazione forzata

Spegnere le password in un giorno crea più problemi di quanti ne risolva. Un rollout progressivo fa emergere incompatibilità e percorsi confusi senza chiudere fuori gli utenti.

### Fase 1: aggiungere la passkey dopo un accesso riuscito

Proporre la creazione quando l'utente ha appena superato un'autenticazione affidabile. La schermata deve spiegare quale dispositivo o gestore verrà usato e come aggiungere una seconda credenziale.

### Fase 2: rendere l'accesso riconoscibile

L'utente deve ritrovare la passkey senza ricordare di averla attivata. La conditional UI di WebAuthn può integrare le credenziali disponibili nel campo di accesso, mantenendo nello stesso percorso metodi legacy e passkey.

### Fase 3: costruire la gestione delle credenziali

Servono una pagina per vedere, nominare e rimuovere le passkey, notifiche quando ne viene aggiunta una e protezioni contro la rimozione accidentale dell'ultimo metodo affidabile.

### Fase 4: misurare prima di rendere passwordless

Le metriche utili includono:

- percentuale di utenti che crea una passkey;
- successo al primo tentativo;
- tempo medio di accesso;
- fallback alla password;
- ticket di assistenza;
- recovery avviati e completati;
- differenze tra browser, sistemi e dispositivi.

Solo quando il percorso è stabile ha senso valutare account senza password o obblighi per gruppi specifici.

## Web app e app mobile: una sola identità, due integrazioni

Un prodotto presente su web, iOS e Android dovrebbe condividere account, policy e registro delle credenziali. L'interfaccia con l'autenticatore cambia tra browser e piattaforme native, ma il backend deve verificare tutto nello stesso modello di sicurezza.

Le associazioni tra domini e applicazioni vanno configurate con attenzione affinché le credenziali siano utilizzabili nel contesto previsto. WebView, browser incorporati, deep link e ambienti di test possono comportarsi diversamente dai flussi ideali mostrati nelle demo.

Quando si sviluppa con una codebase condivisa, come nella scelta tra [app native e React Native](/blog/differenza-app-native-react-native), la logica di prodotto può essere comune ma l'integrazione con i servizi di credenziali richiede configurazioni specifiche di piattaforma. Va provata su dispositivi reali, non soltanto nel simulatore.

## Errori frequenti di implementazione

I problemi più costosi emergono spesso fuori dal flusso principale.

### Salvare una sola passkey per account

Impedisce ridondanza e rende fragile il cambio dispositivo. Il modello dati dovrebbe prevedere una relazione uno-a-molti tra account e credenziali.

### Usare dati personali come user handle

La specifica WebAuthn raccomanda di non inserire email o username nel valore opaco che identifica l'utente presso l'autenticatore. Un identificatore casuale riduce correlazione ed esposizione.

### Verificare solo la firma

Una firma valida non basta se challenge, origine o Relying Party ID non coincidono. Le librerie aiutano, ma configurazione e persistenza della cerimonia restano responsabilità del backend.

### Dimenticare domini e ambienti

La credenziale è legata alla Relying Party. Una scelta affrettata del dominio può complicare sottodomini, rebranding, ambienti separati e app native. Questo va deciso prima del rollout.

### Lasciare il fallback più debole della password attuale

Se l'assistenza può rimuovere una passkey senza una procedura forte, l'account diventa vulnerabile al social engineering. Ogni eccezione deve avere evidenze, limiti e audit.

### Non spiegare la biometria

Molti utenti credono che volto o impronta vengano inviati al servizio. Una breve spiegazione nel momento giusto aumenta fiducia: il dispositivo verifica l'utente localmente; l'app riceve una prova crittografica.

## Costruire o usare un provider

WebAuthn è uno standard aperto, ma un prodotto completo richiede più del protocollo.

| Scelta | Quando conviene |
|---|---|
| Libreria WebAuthn e backend proprio | Team esperto, requisiti specifici, controllo sull'identità |
| Provider di autenticazione | Time-to-market, più metodi di accesso, supporto operativo |
| Approccio ibrido | Identità gestita esternamente, autorizzazioni e sessioni nel prodotto |

Nel confronto vanno valutati portabilità degli utenti, esportazione delle credenziali pubbliche e dei metadati, supporto mobile, multi-tenant, localizzazione, log, SLA e prezzi a crescita avvenuta. Cambiare provider di identità è più difficile che cambiare un componente grafico.

Un [audit tecnico](/blog/audit-tecnico-software-cosa-controllare) dovrebbe verificare non soltanto la libreria, ma i flussi completi: registrazione, accesso, rimozione, recovery, cambio email, account amministrativi e revoca delle sessioni.

## Cosa controllo prima del rilascio

La mia checklist minima è questa:

- challenge casuali, monouso e con scadenza;
- verifica server-side di challenge, origin e RP ID;
- supporto a più credenziali per account;
- nomi e date visibili nella gestione delle passkey;
- notifica per aggiunta e rimozione;
- recovery coerente con il rischio dell'account;
- rate limit e protezioni anti-enumerazione;
- sessioni revocabili e separate dalla credenziale;
- test same-device e cross-device;
- test su browser, iOS e Android supportati;
- accessibilità della UI e alternative utilizzabili;
- log di sicurezza privi di materiale sensibile inutile;
- procedura per assistenza e account privilegiati;
- metriche su successo, fallback e recovery.

Le passkey possono contribuire alla postura richiesta da programmi di sicurezza e conformità, ma non sostituiscono gestione delle vulnerabilità, logging o risposta agli incidenti descritti negli articoli su [NIS2](/blog/nis2-software-azienda-cosa-controllare) e [Cyber Resilience Act](/blog/cyber-resilience-act-software-obblighi-2026).

## Se manca il recovery, il progetto non è finito

WebAuthn risolve bene il protocollo crittografico. L'esperienza dipende da decisioni molto meno eleganti: quando proporre la creazione, come nominare le credenziali, cosa accade cambiando telefono e chi autorizza un recupero.

Se l'utente deve capire chiavi pubbliche e autenticatori, l'interfaccia ha fallito. Deve riconoscere il modo di accedere, sapere che la biometria resta sul dispositivo e trovare un percorso di emergenza che non renda inutile tutta la sicurezza precedente.

Per progettare il rollout in una [web app](/servizi/web-development), in un'[app mobile](/servizi/mobile-development) o nel relativo [backend](/servizi/backend-e-api), puoi partire da un'analisi dei flussi esistenti e descrivere il progetto nella [pagina contatti](/contatti).
