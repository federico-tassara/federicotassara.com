# Monitoraggio SEO — Fractional CTO

## Obiettivo

Misurare quali query e contenuti generano richieste commerciali per il servizio Fractional CTO, separando la visibilità utile dal traffico informativo generico.

## Search Console

Applicare un filtro query con espressione regolare:

```text
fractional cto|cto as a service|cto on demand|cto part time|cto part-time
```

Analizzare ogni 28 giorni:

- clic, impression, CTR e posizione media per query;
- pagina di destinazione associata a ogni query;
- confronto con i 28 giorni precedenti e con lo stesso periodo precedente;
- eventuale competizione tra `/fractional-cto` e gli articoli del cluster.

Le query commerciali generiche devono convergere sulla landing `/fractional-cto`. Gli articoli devono presidiare intenti distinti: costo, scelta, confronto, momento del bisogno e casi reali.

## GA4 e Calendly

Il sito invia l'evento `generate_lead` dopo:

- una prenotazione Calendly completata, con `method: calendly`;
- un modulo di contatto inviato, con `method: contact_form`.

Il parametro `content_source` identifica la pagina o il CTA di origine. In GA4, contrassegnare `generate_lead` come evento chiave e registrare `content_source` come dimensione personalizzata a livello evento.

## Aggiornamento del caso studio

Alla conclusione della Fase 1 aggiornare il caso healthtech con:

- data di completamento o stato effettivo;
- criteri superati e rilievi emersi;
- correzioni necessarie;
- risultati osservabili, senza introdurre metriche non raccolte;
- eventuale testimonianza autorizzata.

Aggiornare `updatedAt` nel front matter quando cambia il contenuto sostanziale.

## Pagina Milano

Non creare una landing dedicata finché `fractional cto milano` non mostra domanda stabile per almeno tre rilevazioni mensili, una posizione abbastanza vicina alla prima pagina da rendere utile un test e un'offerta locale realmente differenziabile. Nel frattempo mantenere il targeting nazionale sulla landing principale.
