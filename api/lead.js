const https = require('https');

const PIXEL_ID = '1162277242762875';
const ACCESS_TOKEN = 'EAAQmKoiUWaMBQPNKla2mzq1w3Ca1UTZBGd0jFu3JB1J2aE4PE2wuIuOII9y8L0B7S1qtZAwHEFZCHtmkWFUYyueWAy8RTo5dsYANZAkXIIq9p5mxMZAZCeDxvuZATG2QpxdX18RlMbz79GOLr40CcuV6B1jgdZC0qmZCvUFJIzL4DseC8DDzfZBKznVJIT4dIvqE0nCgZDZD';

function httpsPost(url, data) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const postData = JSON.stringify(data);

    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve({ ok: res.statusCode >= 200 && res.statusCode < 300, status: res.statusCode, json: JSON.parse(body) });
        } catch (e) {
          resolve({ ok: false, status: res.statusCode, json: { error: body } });
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { event_name, event_source_url, client_ip, client_user_agent, fbc, fbp } = req.body;

    const eventTime = Math.floor(Date.now() / 1000);
    const eventId = `${event_name}_${eventTime}_${Math.random().toString(36).substr(2, 9)}`;

    const userData = {};

    // Add Facebook click ID if available
    if (fbc) {
      userData.fbc = fbc;
    }

    // Add Facebook browser ID if available
    if (fbp) {
      userData.fbp = fbp;
    }

    // Add client IP and user agent for better matching
    if (client_ip) {
      userData.client_ip_address = client_ip;
    }
    if (client_user_agent) {
      userData.client_user_agent = client_user_agent;
    }

    const eventData = {
      data: [
        {
          event_name: event_name || 'Lead',
          event_time: eventTime,
          event_id: eventId,
          event_source_url: event_source_url || '',
          action_source: 'website',
          user_data: userData,
        },
      ],
    };

    const url = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

    const response = await httpsPost(url, eventData);

    if (!response.ok) {
      console.error('Meta CAPI Error:', response.json);
      return res.status(response.status).json({ error: response.json });
    }

    return res.status(200).json({ success: true, result: response.json, event_id: eventId });
  } catch (error) {
    console.error('CAPI Error:', error);
    return res.status(500).json({ error: error.message });
  }
};
