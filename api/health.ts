export default function handler(req: any, res: any) {
  const configuredOrigin = process.env.CORS_ORIGIN;
  const requestOrigin = req.headers.origin;
  const allowOrigin = configuredOrigin || requestOrigin || '*';

  res.setHeader('Access-Control-Allow-Origin', allowOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  return res.status(200).json({
    ok: true,
    service: 'fruit-stall-vercel-api',
    telegramMockMode: process.env.TELEGRAM_MOCK_MODE === 'true',
  });
}
