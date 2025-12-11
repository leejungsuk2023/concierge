// /api/lead.js — Vercel Serverless Function for Meta CAPI
const crypto = require('crypto');

const PIXEL_ID = '1162277242762875';
const ACCESS_TOKEN = 'EAAQmKoiUWaMBQPNKla2mzq1w3Ca1UTZBGd0jFu3JB1J2aE4PE2wuIuOII9y8L0B7S1qtZAwHEFZCHtmkWFUYyueWAy8RTo5dsYANZAkXIIq9p5mxMZAZCeDxvuZATG2QpxdX18RlMbz79GOLr40CcuV6B1jgdZC0qmZCvUFJIzL4DseC8DDzfZBKznVJIT4dIvqE0nCgZDZD';

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    const ip = forwarded.split(',')[0].trim();
    if (ip) return ip;
  }
  return (req.socket && req.socket.remoteAddress) || '';
}

// Node 기본 req에서 JSON 바디 파서
async function readJson(req) {
  // Vercel이 이미 파싱한 경우
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }
  return await new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (c) => (data += c));
    req.on('end', () => {
      try { resolve(data ? JSON.parse(data) : {}); }
      catch (e) { resolve({}); }
    });
    req.on('error', reject);
  });
}

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
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

    const { event_name, event_source_url, client_user_agent, fbc, fbp } = await readJson(req);
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
      console.error('CAPI Error:', json);
      return res.status(500).json({ ok: false, meta: json });
    }
    return res.status(200).json({ ok: true, meta: json, event_id: eventId });
  } catch (e) {
    console.error('Function Crash:', e);
    return res.status(500).json({ ok: false, error: e.message || String(e) });
  }
};
