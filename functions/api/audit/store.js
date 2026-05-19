const DEFAULT_SECRET = 'droptimize-audit-2026';

export async function onRequestOptions() {
  return new Response(null, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, X-Audit-Secret' } });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const secret = request.headers.get('X-Audit-Secret') || '';
  const expected = env.OYE_KV
    ? (await env.OYE_KV.get('audit_secret')) || DEFAULT_SECRET
    : DEFAULT_SECRET;

  if (secret !== expected) {
    return new Response(JSON.stringify({ ok: false, error: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
  }

  try {
    const audit = await request.json();
    audit.stored_at = new Date().toISOString();

    if (env.OYE_KV) {
      await env.OYE_KV.put('audit:latest', JSON.stringify(audit));
      const week = audit.week || new Date().toISOString().slice(0, 10);
      await env.OYE_KV.put(`audit:${week}`, JSON.stringify(audit), { expirationTtl: 60 * 60 * 24 * 90 });
    }

    return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
