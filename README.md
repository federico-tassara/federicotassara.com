# federicotassara.com

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
