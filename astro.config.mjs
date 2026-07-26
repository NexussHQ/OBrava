// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

// ObraBrava · Astro config
// Despliegue objetivo: Dokploy (Docker on VPS) → dominio obrava.global-bnex.site
// Adapter: standalone (Node server) — perfecto para Dokploy
export default defineConfig({
  site: 'https://obrava.global-bnex.site',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 4321,
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
    server: {
      // Permitir preview/serve desde el dominio público detrás de Dokploy/Traefik
      allowedHosts: ['obrava.global-bnex.site', '.global-bnex.site'],
    },
  },
});
