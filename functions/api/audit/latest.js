export async function onRequestGet(context) {
  const { env, request } = context;
  if (!env.DROPTIMIZE_KV) {
    return new Response(JSON.stringify({ ok: true, audit: null }), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
  const url = new URL(request.url);
  const domain = (url.searchParams.get('domain') || '').toLowerCase().replace(/^www\./, '');
  const key = domain ? `audit:latest:${domain}` : 'audit:latest';
  const audit = await env.DROPTIMIZE_KV.get(key, 'json');
  return new Response(JSON.stringify({ ok: true, audit }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
