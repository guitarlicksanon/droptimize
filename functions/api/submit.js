const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
};

export async function onRequestOptions() {
  return new Response(null, { headers: CORS });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const formData = await request.formData();

    if (formData.get('_honey')) {
      return json({ ok: true });
    }

    const submission = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      timestamp: new Date().toISOString(),
      name:    (formData.get('name')    || '').trim(),
      email:   (formData.get('email')   || '').trim(),
      message: (formData.get('message') || '').trim(),
      website: (formData.get('website') || '').trim(),
      charity: (formData.get('charity') || '').trim(),
      subject: (formData.get('_subject')|| 'Droptimize - Audit Request').trim(),
      source:  (formData.get('_source') || 'droptimize').trim(),
      read: false,
    };

    if (!submission.name || !submission.email) {
      return json({ ok: false, error: 'Missing required fields' }, 400);
    }

    if (env.DROPTIMIZE_KV) {
      const existing = await env.DROPTIMIZE_KV.get('submissions', 'json') || [];
      existing.unshift(submission);
      await env.DROPTIMIZE_KV.put('submissions', JSON.stringify(existing.slice(0, 1000)));
    }

    if (env.RESEND_API_KEY) {
      const body = [
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        submission.website ? `Website: ${submission.website}` : '',
        submission.charity ? `Charity: ${submission.charity}` : '',
        '',
        'Message:',
        submission.message,
        '',
        `---`,
        `Source: ${submission.source}`,
        `Time: ${submission.timestamp}`,
      ].filter(Boolean).join('\n');

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Droptimize <forms@droptimize.org>',
          to: ['lessthanblake@proton.me'],
          subject: submission.subject,
          text: body,
        }),
      });
    }

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: err.message }, 500);
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
}
