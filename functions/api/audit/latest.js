export async function onRequestGet(context) {
  const { env } = context;
  const audit = env.OYE_KV ? await env.OYE_KV.get('audit:latest', 'json') : null;
  return new Response(JSON.stringify({ ok: true, audit }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
