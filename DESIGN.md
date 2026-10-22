---
name: Federico Tassara
description: Personal branding professionale per founder e aziende.
colors:
  accent: "#00875f"
  accent-dark: "#006a4a"
  ink: "#161d1a"
  ink-soft: "#294537"
  muted: "#5f6e65"
  line: "#d6dcd7"
  surface: "#ffffff"
  surface-alt: "#f3f7f4"
  canvas: "#ffffff"
  highlight: "#b8f2d8"
  closing: "#152c26"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.05vw, 54px)"
    fontWeight: 550
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "38px"
    fontWeight: 550
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    lineHeight: 1.65
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
rounded:
  input: "8px"
  card: "22px"
  panel: "25px"
  portrait: "28px"
  pill: "9999px"
spacing:
  sm: "12px"
  md: "20px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.accent-dark}"
  button-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "44px"
  button-ghost:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "44px"
  button-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "44px"
  service-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "25px 23px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.input}"
    padding: "12px 16px"
---

# Design System: Federico Tassara

## Overview

La direzione approvata è una pagina bianca a tutta larghezza con contenuti centrati, con Geist, accenti smeraldo e fotografie personali dagli angoli morbidi. La presenza di Federico resta riconoscibile mentre servizi, progetti e contenuti parlano a founder e aziende.

Questa documentazione fotografa il codice implementato, con priorità ad `app/globals.css` e ai componenti condivisi. Non introduce una nuova metafora creativa o una nuova identità.

**Key Characteristics:**
- Tipografia compatta e leggibile.
- Ritratto personale e prove di esperienza.
- Superfici prevalentemente piatte e bordi leggeri.

## Colors

L’accento smeraldo identifica le azioni principali; il verde chiaro evidenzia parole, il verde scuro chiude la pagina. Gli inchiostri verdi quasi neri mantengono continuità con l’accento. Il bianco si estende fino ai bordi della finestra; le superfici alternative distinguono gruppi di contenuto senza ombre pervasive.

## Typography

Geist serve titoli, testo e controlli. Il display usa peso medio e tracking stretto; i titoli delle sezioni mantengono la stessa voce. I testi delle card usano corpo 14px e interlinea 1.6. Gli articoli conservano un corpo più ampio (1.05rem, interlinea 1.75) e sottotitoli più marcati. Su mobile il titolo della home diventa 39px e i titoli di sezione 32px.

## Layout

La pagina bianca occupa tutta la larghezza, senza cornice o padding esterno. Il contenitore interno occupa l’86%, fino a 1120px. Su mobile il contenitore occupa l’88%.

La home affianca testo e ritratto con colonne 1.25fr/1fr; sotto 640px passa a una colonna. Le sezioni informative alternano spazio bianco e pannelli morbidi. I tre pilastri diventano una colonna su mobile. La navigazione desktop compare a 1024px; sotto tale soglia si usa un menu espandibile con scorrimento proprio.

La sezione progetti della home presenta MOSE e Sinfea in righe editoriali con immagine e testo alternati (1.35fr/1fr e 1fr/1.35fr). Sotto 640px ogni immagine precede il testo in una colonna. Il portfolio Software raccoglie otto progetti in due colonne, ridotte a una sotto 640px, con immagini, ruolo e sintesi. Le immagini condivise provengono dal registro dei media dei progetti.

## Elevation & Depth

Card e sezioni sono piatte, separate da contorni e variazioni di superficie. Il menu servizi usa l’ombra `shadow-xl` di Tailwind: è un livello sovrapposto funzionale, non un trattamento da estendere alle card. Il ritratto contiene una didascalia scura semitrasparente. Le schermate software usano una lieve ombra dell’immagine su fondo caldo per rendere distinguibile l’interfaccia; le fotografie restano piatte.

## Shapes

Le card condividono angoli ampi; le immagini principali arrivano a 25–28px. I pulsanti sono capsule. Campi e menu conservano angoli più piccoli per non competere con le fotografie. I loghi mantengono le proporzioni originali; il fallback B-Play è circolare.

## Components

- **Pulsanti:** primario smeraldo, hover più scuro; outline con bordo e lieve sollevamento; ghost con sfondo tenue al passaggio; link sottolineato. Altezze 36/44/48px. Stato disabilitato al 50% di opacità.
- **Card servizi e articoli:** bordo sottile, hover smeraldo, nessuna ombra. Titolo, descrizione e collegamento mantengono una gerarchia breve.
- **Campi:** superficie bianca, bordo tenue, label visibile. Focus con bordo scuro e anello discreto; errori rossi e indisponibilità ambra sono stati funzionali.
- **Navigazione:** header bianco sticky; separatore sottile dopo lo scroll. Il menu servizi risponde anche al focus da tastiera. Il menu mobile espone lo stato tramite `aria-expanded`.
- **Loghi clienti:** sei loghi statici, senza marquee. Sinfea non è un link; B-Play usa il fallback LinkedIn circolare previsto.
- **Immagini progetto:** fotografie a copertura, schermate e copertine intere senza ritagli. Angoli da 26px, ridotti a 22px su mobile. Le schermate dimostrative restano dichiarate nelle didascalie; non sono presentate come schermate di produzione. La home usa immagini ampie (rapporto 1.2); il portfolio usa rapporto 1.5.
- **Movimento:** le animazioni di ingresso sono disattivate. Su desktop da 900px con puntatore preciso, supporto alle timeline di scroll e nessuna preferenza di movimento ridotto, le sole fotografie dei progetti in home scorrono dolcemente da −3% a +3% con scala 1.08. Testi e schermate rimangono fermi. Gli hover delle frecce durano 200ms; le immagini del portfolio crescono a scala 1.025 in 250ms sui dispositivi con hover e puntatore preciso. Con movimento ridotto sono disattivati parallax, trasformazioni, transizioni e scorrimento fluido.

## Do's and Don'ts

- **Do** mantenere testi, rotte, metadati SEO e gerarchia semantica durante i ritocchi visivi.
- **Do** usare i token e i componenti condivisi per le nuove pagine.
- **Do** mantenere fotografie leggibili e focus da tastiera visibile.
- **Do** usare immagini pertinenti ai progetti e dichiarare le schermate dimostrative.
- **Don't** trasformare i sei loghi statici in un carosello animato.
- **Don't** inventare link per Sinfea o alterare il fallback circolare B-Play.
