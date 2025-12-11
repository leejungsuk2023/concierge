// /api/lead.js — Vercel Serverless Function for Meta CAPI

const PIXEL_ID = '1162277242762875';
const ACCESS_TOKEN = 'EAAQmKoiUWaMBQPNKla2mzq1w3Ca1UTZBGd0jFu3JB1J2aE4PE2wuIuOII9y8L0B7S1qtZAwHEFZCHtmkWFUYyueWAy8RTo5dsYANZAkXIIq9p5mxMZAZCeDxvuZATG2QpxdX18RlMbz79GOLr40CcuV6B1jgdZC0qmZCvUFJIzL4DseC8DDzfZBKznVJIT4dIvqE0nCgZDZD';

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    const ip = forwarded.split(',')[0].trim();
    if (ip) return ip;
  }
  return '';
}

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Health check
  if (req.method === 'GET') {
    return res.status(200).json({ ok: true, hint: 'POST /api/lead with JSON body' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    const body = req.body || {};
    const { event_name, event_source_url, client_user_agent, fbc, fbp } = body;
    const clientIp = getClientIp(req);
    const ua = client_user_agent || req.headers['user-agent'] || '';

    const eventTime = Math.floor(Date.now() / 1000);
    const eventId = `${event_name || 'Event'}_${eventTime}_${Math.random().toString(36).substr(2, 9)}`;

    const payload = {
      data: [{
        event_name: event_name || 'Lead',
        event_time: eventTime,
        event_id: eventId,
        action_source: 'website',
        event_source_url: event_source_url || 'https://concierge-service.vercel.app/',
        user_data: {
          fbp: fbp || undefined,
          fbc: fbc || undefined,
          client_user_agent: ua || undefined,
          client_ip_address: clientIp || undefined,
        },
      }]
    };

    const url = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const json = await r.json();

    if (!r.ok) {
      return res.status(500).json({ ok: false, meta: json });
    }
    return res.status(200).json({ ok: true, meta: json, event_id: eventId });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message || String(e) });
  }
};
