export async function onRequestGet(context) {
  const { env, request } = context;
  const url = new URL(request.url);
  const domain = url.searchParams.get('domain');
  if (!domain) {
    return new Response(JSON.stringify({ ok: false, error: 'domain required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  const history = env.DROPTIMIZE_KV
    ? await env.DROPTIMIZE_KV.get(`audit:history:${domain}`, 'json')
    : null;
  return new Response(JSON.stringify({ ok: true, domain, history: history || [] }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
