# OBrava · Web v2

Sitio web oficial de **OBrava — Brigada de construcción en La Habana, Cuba**.

> La brigada que sí aparece. Presupuesto claro, fecha cierta, garantía escrita.

---

## Stack

- **Astro 4** (SSR con `@astrojs/node` standalone)
- **Tailwind CSS 3** con tokens del manual de marca OBrava
- **Tipografía**: Inter (display) + JetBrains Mono (etiquetas)
- **Sin frameworks JS** en el cliente; los componentes interactivos son `<details>` y un toggle para el menú móvil

## Estructura

```
src/
├── assets/logos/      # PNGs del monograma 3D OB (de la guía de marca)
├── components/        # Header, Footer, WhatsAppFab, OBMonogram
├── layouts/           # BaseLayout (Header + Footer + FAB + SEO)
├── pages/             # index, servicios, nosotros, contacto, api/contacto
└── styles/global.css  # Tokens + componentes (panel, btn-*, spec-list, proof-*)
```

## Identidad de marca

- **Construction Orange** `#F26522`
- **Deep Charcoal** `#000000`
- **Technical White** `#F7FAFD`
- **Brand Silver** `#333333`
- **Brand Yellow** `#FFCC00`

Bordes `4–8px`, sombras duras `4–8px offset`, `border-radius: 0` global (excepto el FAB de WhatsApp, que es circular).

## Contacto (configurado)

- **WhatsApp**: +53 526 222 65 → `https://wa.me/5352622265`
- **Email**: sandyllerena77@gmail.com
- **Teléfono**: 052 622 265
- **Ubicación**: La Habana, Cuba

Para cambiar los datos, busca `5352622265` / `sandyllerena77@gmail.com` / `052 622 265` en `src/`.

## Variables de entorno

Copia `.env.example` a `.env` para desarrollo local.

```
PUBLIC_SITE_URL=https://obrava.global-bnex.site
PUBLIC_WHATSAPP_NUMBER=+5352622265
PUBLIC_EMAIL=sandyllerena77@gmail.com
PUBLIC_PHONE_DISPLAY=052 622 265
PUBLIC_CONTACTO_WEBHOOK=    # opcional: webhook n8n/Formspree/Resend
```

## Desarrollo local

```bash
npm install
npm run dev          # http://localhost:4321
```

## Build

```bash
npm run build        # genera dist/ + server/
node ./dist/server/entry.mjs   # arranca SSR en :4321
```

## Deploy a Dokploy

1. Sube este repo a GitHub.
2. En Dokploy, **Create Service → Application → from GitHub** con `NexussHQ/OBrava`.
3. **Build**: deja que Dokploy detecte el `Dockerfile` automáticamente.
4. **Service Port**: `4321`
5. **Container Port**: `4321`
6. **Domain**: `obrava.global-bnex.site` → Dokploy genera el certificado TLS automático (Let's Encrypt).
7. **Healthcheck**: ya está en el Dockerfile (`wget http://localhost:4321/`).

> El `Dockerfile` es multi-stage (node:20-alpine) y expone `4321` por defecto.

## Páginas

- `/` — Landing principal (hero + 3 promesas + 5 servicios + proceso + embajadores + FAQ)
- `/servicios` — Detalle de los 5 paquetes con specs y quotes
- `/nosotros` — Historia, valores, stats
- `/contacto` — 4 canales (WhatsApp, email, tel, ubicación) + proceso de 4 pasos
- `/api/contacto` — POST endpoint para n8n / Formspree / Resend

## Licencia

Privado · OBrava · La Habana, Cuba · 2026
