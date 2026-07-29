---
title: "Scaling verticale e orizzontale: quale serve al tuo sistema e quando"
date: "2026-07-29"
author: "Federico Tassara"
category: "Infrastruttura"
excerpt: "Aggiungere risorse a una macchina o aggiungere macchine: due strade con costi, limiti e prerequisiti diversi. Come capire quale ti serve, e cosa devi cambiare nel codice prima di poter scalare in orizzontale."
tags: ["scalabilità", "infrastruttura", "architettura", "backend", "cloud", "performance"]
faq:
  - q: "Qual è la differenza tra scaling verticale e orizzontale?"
    a: "Lo scaling verticale aggiunge risorse alla macchina esistente: più CPU, più RAM, disco più veloce. Lo scaling orizzontale aggiunge macchine che lavorano in parallelo dietro un bilanciatore. Il primo si applica senza toccare il codice ma ha un tetto fisico e un costo che cresce più che linearmente; il secondo non ha un tetto pratico ma richiede che l'applicazione sia stata scritta per girare in più copie."
  - q: "Quando conviene scalare in verticale?"
    a: "Quando il carico è ancora gestibile da una macchina sola, quando il collo di bottiglia è il database, e quando serve tempo per sistemare il codice. Aumentare la taglia di un'istanza richiede pochi minuti e nessuna modifica applicativa: come misura tampone davanti a una crescita improvvisa resta la scelta più rapida."
  - q: "Cosa impedisce a un'applicazione di scalare in orizzontale?"
    a: "Lo stato tenuto in memoria del processo. Sessioni utente salvate localmente, file caricati sul disco dell'istanza, cache in RAM, job schedulati che partono da ogni copia: con due macchine ognuna di queste cose si rompe o si duplica. Sono tutti problemi risolvibili, e vanno risolti prima di aggiungere la seconda istanza."
  - q: "Quanto costa preparare un'applicazione allo scaling orizzontale?"
    a: "Dipende da quanto stato locale ha accumulato. Spostare le sessioni su un archivio condiviso e i file su object storage richiede giorni; districare una cache in memoria su cui si basa la logica di business può richiedere settimane. La differenza di costo tra farlo all'inizio e farlo sotto pressione è la ragione per cui conviene decidere presto."
---

**TL;DR.** Due strade per reggere più carico, con prerequisiti diversi:

- **verticale**: macchina più grande, nessuna modifica al codice, tetto fisico e costo che cresce in fretta
- **orizzontale**: più macchine in parallelo, nessun tetto pratico, e richiede un'applicazione senza stato locale

La domanda utile non riguarda quale sia migliore. Riguarda cosa impedisce oggi alla tua applicazione di girare in due copie.

Quando un sistema comincia a rallentare sotto carico, la scelta si presenta come tecnica e in realtà arriva prima: dipende da come qualcuno ha scritto l'applicazione mesi o anni fa. Chi ha tenuto lo stato fuori dal processo può aggiungere macchine in un pomeriggio. Chi non l'ha fatto scopre il problema nel momento peggiore.

## Le due strade

Lo scaling verticale aumenta le risorse della macchina che già hai: passi da 4 a 16 core, da 8 a 64 GB di RAM, da disco meccanico a SSD. L'applicazione resta identica e non se ne accorge. Su un cloud provider è un'operazione da pochi minuti con un riavvio in mezzo.

Lo scaling orizzontale aggiunge copie dell'applicazione che lavorano insieme, con un bilanciatore davanti che distribuisce le richieste. Le macchine possono essere piccole, e ne aggiungi quante ne servono.

La differenza che conta sta nei prerequisiti. Il verticale non ne ha nessuno. L'orizzontale richiede che l'applicazione sia stata pensata per girare in più copie, e questa condizione va verificata prima di scoprire che manca.

## I limiti del verticale

Due limiti, e uno arriva molto prima dell'altro.

Il tetto fisico esiste ma è alto: i provider offrono istanze con centinaia di core e terabyte di RAM, e la maggior parte delle applicazioni non ci arriva mai. Chi si ferma qui di solito ha un problema diverso da quello che pensa.

Il costo morde prima. Il prezzo delle istanze cresce più che proporzionalmente rispetto alle risorse: raddoppiare CPU e memoria costa più del doppio, e la differenza si allarga sulle taglie grandi. A un certo punto due macchine medie costano meno di una grande e reggono più carico.

Resta un terzo aspetto, che non riguarda le prestazioni: una macchina sola è un punto singolo di rottura. Se si ferma, il servizio si ferma. Nessuna quantità di CPU cambia questo, e per molti sistemi è la ragione principale per passare all'orizzontale, prima ancora del carico.

## Cosa impedisce l'orizzontale

Con due istanze dietro un bilanciatore, le richieste di uno stesso utente possono arrivare a macchine diverse. Tutto quello che una macchina ha salvato nel proprio processo sparisce per l'altra. Quattro casi ricorrono in quasi tutti i progetti.

**Le sessioni in memoria.** L'utente fa login sulla macchina A, la richiesta successiva finisce sulla B, che non lo conosce e lo rimanda al login. Si risolve spostando le sessioni su un archivio condiviso (Redis, o il database) oppure usando token firmati che non richiedono stato sul server.

**I file sul disco locale.** Un allegato caricato finisce sul disco della macchina che ha ricevuto la richiesta. Le altre non lo vedono, e chi prova a scaricarlo riceve un 404 nella metà dei casi. La destinazione corretta è un object storage esterno.

**La cache in memoria.** Ogni istanza si costruisce la propria, quindi le copie divergono e l'invalidazione su una non tocca le altre. Chi ricarica la pagina vede alternarsi dati vecchi e nuovi. Serve una cache condivisa.

**I job schedulati.** Un cron dentro l'applicazione parte su ogni istanza. Con tre macchine, la fattura mensile viene generata tre volte. Vanno spostati fuori, in uno scheduler esterno o in un processo dedicato che gira in copia singola.

Nessuno di questi problemi è difficile da risolvere. Diventano costosi quando li scopri tutti insieme mentre il sistema è sotto pressione.

## Il database segue regole sue

L'applicazione si replica con facilità. Il database no, e nella maggior parte dei sistemi che vedo è lui il vero collo di bottiglia.

Aggiungere istanze applicative davanti a un database che già fatica peggiora la situazione, perché moltiplica le connessioni aperte. Prima di scalare in orizzontale conviene sempre verificare dove sia il limite: se il tempo di risposta cresce per via delle query, altre macchine non cambiano nulla.

Per il database l'ordine degli interventi ha una sequenza consolidata. Prima gli indici e le query lente, che spesso restituiscono più di qualsiasi hardware. Poi il connection pooling, per non aprire una connessione per richiesta. Poi le repliche in lettura, che scaricano le query di sola lettura sulle copie. Lo sharding e la separazione per dominio arrivano dopo, e portano una complessità che pochi sistemi giustificano.

## Come scegliere

Tre situazioni coprono la maggior parte dei casi reali.

Se il carico cresce e la macchina attuale ha ancora margine, aumenta la taglia e guadagna tempo. È la mossa giusta finché il costo dell'istanza resta ragionevole, e non preclude nulla.

Se il servizio non può fermarsi, passa all'orizzontale a prescindere dal carico. Qui il motivo è la ridondanza, e due macchine piccole battono una grande anche a parità di risorse.

Se il traffico ha picchi marcati, l'orizzontale con scaling automatico paga da subito: paghi le istanze in più solo nelle ore in cui servono, mentre una macchina dimensionata sul picco resta sovradimensionata per il resto del tempo.

Sopra tutte, un principio che conviene applicare quando il costo è ancora zero: scrivere l'applicazione senza stato locale fin dall'inizio. Non ti obbliga a distribuire nulla, e ti lascia la possibilità di farlo in un pomeriggio invece che in un trimestre.

## Conclusione

Verticale e orizzontale rispondono a problemi diversi. La macchina più grande risolve un limite di risorse e si applica subito. Le macchine multiple risolvono anche la disponibilità e il costo sui volumi alti, e chiedono in cambio che l'applicazione non tenga niente per sé.

Chi decide presto paga poco. Chi rimanda si ritrova a districare sessioni, file e cache mentre il sistema è già in difficoltà, che è il momento in cui ogni intervento costa il triplo.

Se vuoi capire dove sia il limite reale del tuo sistema prima di spendere in infrastruttura, guardo architettura e codice e ti dico da dove partire: vedi [architettura e scalabilità](/servizi/architettura-e-scalabilita), oppure [scrivimi](/contatti). Se il dubbio riguarda lo stato complessivo del progetto, ne parlo in [audit tecnico del software](/blog/audit-tecnico-software-cosa-controllare).
