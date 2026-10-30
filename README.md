# federicotassara.com

## Deploy Docker su CapRover

Il workflow `.github/workflows/deploy.yml` esegue lint e build su GitHub a ogni
push su `main`, poi invia il bundle standalone a CapRover. `captain-definition`
usa `deploy/Dockerfile`, che richiede il bundle già compilato dal workflow.
L'app CapRover deve usare la porta container **3000**, senza volume persistente.

Prima di attivare il workflow, configura nel repository GitHub:

- Secret `CAPROVER_SERVER`: URL HTTPS del pannello CapRover.
- Secret `CAPROVER_APP_TOKEN`: token di deploy della sola app del sito.
- Variabile `CAPROVER_APP_NAME`: nome dell'app creata su CapRover.
- Variabili `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `NEXT_PUBLIC_AKINTU_CLIENT_KEY`
  e, se necessario, `NEXT_PUBLIC_AKINTU_API_URL`.

Le variabili `NEXT_PUBLIC_*` sono pubbliche e vengono incorporate nella build:
modificarle richiede un nuovo deploy. In CapRover configura a runtime
`TURNSTILE_SECRET_KEY`, `RESEND_API_KEY`, `RESEND_FROM` e `RESEND_TO`.
Non inserire questi segreti nel repository o negli argomenti Docker.

Per compilare localmente l'immagine direttamente dai sorgenti:

```bash
docker build -t federicotassara .
docker run --rm -p 3000:3000 --env-file .env.local federicotassara
```

Passa le variabili pubbliche necessarie con `docker build --build-arg NOME=valore`.
Il file `.dockerignore` esclude tutti i file `.env` dal contesto di build.

Per la migrazione: verificare backup e inventario delle app esistenti, creare
l'app del sito, configurare le variabili e verificare il deploy sul dominio
temporaneo. Collegare poi `federicotassara.com` e `www.federicotassara.com`,
aggiornare i soli record DNS web verso la VPS e abilitare HTTPS prima di forzarlo.
Conservare i record DNS della posta. Verificare home, blog, immagini, redirect e
form contatti prima di dismettere il vecchio hosting.

## Widget Akintu

Il sito usa il pacchetto npm pubblico `@akintu/widget` e rende entrambe le
superfici v1 nella pagina `/widget-demo`.

Configura la client key autorizzata per il dominio in `.env.local`:

```bash
NEXT_PUBLIC_AKINTU_CLIENT_KEY=YOUR_CLIENT_KEY
```

Il widget usa `https://api.akintu.com` per impostazione predefinita. Per puntare
a un altro ambiente puoi aggiungere:

```bash
NEXT_PUBLIC_AKINTU_API_URL=https://your-api.example.com
```

Avvia il sito:

```bash
npm run dev
```

Apri `/widget-demo` sull’indirizzo mostrato da Next.js nel terminale (per
esempio `http://localhost:3000/widget-demo`, oppure la prima porta libera).
Dopo ogni modifica alle variabili d’ambiente riavvia Next.js.
