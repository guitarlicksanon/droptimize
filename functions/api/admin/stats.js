export async function onRequestGet({ request, env }) {
  const secret = request.headers.get('X-Admin-Secret');
  if (!secret || secret !== env.ADMIN_SECRET) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
  }
  try {
    const [submissions, latestAudit, awKeys] = await Promise.all([
      env.DROPTIMIZE_KV.get('submissions', 'json'),
      env.DROPTIMIZE_KV.get('audit:latest', 'json'),
      env.DROPTIMIZE_KV.list({ prefix: 'auditwatch:' }),
    ]);
    const subs = submissions || [];
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const last7 = subs.filter(s => new Date(s.timestamp).getTime() > weekAgo).length;
    const unread = subs.filter(s => !s.read).length;
    const keys = awKeys.keys || [];
    const plans = { solo: 0, business: 0, agency: 0 };
    await Promise.all(keys.map(async k => {
      const val = await env.DROPTIMIZE_KV.get(k.name, 'json');
      if (val && val.plan) { const p = val.plan.replace('audit-watch-', ''); if (plans[p] !== undefined) plans[p]++; }
    }));
    return new Response(JSON.stringify({
      brand: 'droptimize',
      submissions: { total: subs.length, unread, last7Days: last7, latest: subs[0] || null },
      auditWatch: { totalSubscribers: keys.length, plans },
      latestSeoAudit: latestAudit ? { week: latestAudit.week, scores: latestAudit.scores || {} } : null,
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ brand: 'droptimize', error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
