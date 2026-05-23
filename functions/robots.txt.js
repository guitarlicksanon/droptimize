export async function onRequest() {
  return new Response(
    "User-agent: *\nAllow: /\n\nSitemap: https://droptimize.org/sitemap.xml\n",
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
}
