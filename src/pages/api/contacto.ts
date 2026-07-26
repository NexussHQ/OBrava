// src/pages/api/contacto.ts
// Endpoint simple de contacto. Acepta POST con {name, phone, message, service}.
// Responde JSON. Diseñado para conectar con n8n, Formspree, Resend, o webhook propio.
import type { APIRoute } from 'astro';

export const prerender = false;

interface ContactPayload {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  service?: string;
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export const POST: APIRoute = async ({ request }) => {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  const name = (body.name ?? '').trim();
  const phone = (body.phone ?? '').trim();
  const email = (body.email ?? '').trim();
  const message = (body.message ?? '').trim();
  const service = (body.service ?? '').trim();

  if (!name || !message) {
    return json({ ok: false, error: 'missing_fields', missing: { name: !name, message: !message } }, 400);
  }
  if (!phone && !email) {
    return json({ ok: false, error: 'missing_contact', missing: { phone: !phone, email: !email } }, 400);
  }
  if (email && !isEmail(email)) {
    return json({ ok: false, error: 'invalid_email' }, 400);
  }

  // === Integración: n8n webhook (cuando esté listo) ===
  const webhookUrl = import.meta.env.PUBLIC_CONTACTO_WEBHOOK;
  if (webhookUrl) {
    try {
      const resp = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          service,
          source: 'web',
          ts: new Date().toISOString(),
        }),
      });
      if (!resp.ok) throw new Error(`webhook_${resp.status}`);
    } catch (err) {
      // No fallamos al cliente: el equipo verá logs. La web sigue funcionando.
      console.error('[contacto] webhook error', err);
    }
  } else {
    console.log('[contacto] no PUBLIC_CONTACTO_WEBHOOK set · payload:', { name, phone, email, service, message });
  }

  return json({ ok: true, received_at: new Date().toISOString() });
};

export const GET: APIRoute = () =>
  json({ ok: true, hint: 'POST { name, phone, email?, message, service? }' }, 200);
