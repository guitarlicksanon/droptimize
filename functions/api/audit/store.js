const DEFAULT_SECRET = 'droptimize-audit-2026';

export async function onRequestOptions() {
  return new Response(null, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, X-Audit-Secret' } });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const secret = request.headers.get('X-Audit-Secret') || '';
  const expected = env.DROPTIMIZE_KV
    ? (await env.DROPTIMIZE_KV.get('audit_secret')) || DEFAULT_SECRET
    : DEFAULT_SECRET;

  if (secret !== expected) {
    return new Response(JSON.stringify({ ok: false, error: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
  }

  try {
    const audit = await request.json();
    audit.stored_at = new Date().toISOString();

    const week = audit.week || new Date().toISOString().slice(0, 10);
    let domain = null;
    try { domain = new URL(audit.url).hostname; } catch {}

    if (env.DROPTIMIZE_KV) {
      // Per-domain latest (all sites)
      if (domain) {
        await env.DROPTIMIZE_KV.put(`audit:latest:${domain}`, JSON.stringify(audit));
      }
      // Global latest kept for droptimize.org (backwards compat with live-audit section)
      if (!domain || domain === 'droptimize.org') {
        await env.DROPTIMIZE_KV.put('audit:latest', JSON.stringify(audit));
        await env.DROPTIMIZE_KV.put(`audit:${week}`, JSON.stringify(audit), { expirationTtl: 60 * 60 * 24 * 90 });
      }

      // Append to per-domain history (max 52 = 1 year of weekly audits)
      if (domain) {
        const histKey = `audit:history:${domain}`;
        const existing = (await env.DROPTIMIZE_KV.get(histKey, 'json')) || [];
        // Avoid duplicate entries for the same week
        const filtered = existing.filter(e => e.date !== week);
        filtered.push({ date: week, scores: audit.scores });
        await env.DROPTIMIZE_KV.put(histKey, JSON.stringify(filtered.slice(-52)));
      }
    }

    return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
