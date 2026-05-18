const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

type CheckoutItem = {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  unit: string;
  lineTotal: number;
};

type CheckoutRequest = {
  customerName: string;
  paymentMethod: string;
  items: CheckoutItem[];
  totals: {
    subtotal: number;
    deliveryFee: number;
    ecoPackaging: number;
    grandTotal: number;
  };
};

const setCorsHeaders = (req: any, res: any) => {
  const configuredOrigin = process.env.CORS_ORIGIN;
  const requestOrigin = req.headers.origin;

  // Reflect request origin when allowed; fallback to wildcard for simple setups.
  const allowOrigin = configuredOrigin || requestOrigin || '*';
  res.setHeader('Access-Control-Allow-Origin', allowOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
};

const formatTelegramMessage = (orderId: string, payload: CheckoutRequest) => {
  const itemLines = payload.items
    .map(
      (item, index) =>
        `${index + 1}. ${escapeHtml(item.name)} x ${item.quantity} (${escapeHtml(item.unit)}) - Rs.${item.lineTotal}`,
    )
    .join('\n');

  return [
    'NEW FRUIT STALL ORDER',
    `Order ID: ${orderId}`,
    `Customer: ${escapeHtml(payload.customerName)}`,
    `Payment: ${escapeHtml(payload.paymentMethod)}`,
    '',
    'Items:',
    itemLines,
    '',
    `Subtotal: Rs.${payload.totals.subtotal}`,
    `Delivery: Rs.${payload.totals.deliveryFee}`,
    `Eco-Packaging: Rs.${payload.totals.ecoPackaging}`,
    `Grand Total: Rs.${payload.totals.grandTotal}`,
    '',
    `Time: ${new Date().toLocaleString('en-IN')}`,
  ].join('\n');
};

const sendTelegramMessage = async (text: string) => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const mockMode = process.env.TELEGRAM_MOCK_MODE === 'true';

  if (mockMode) {
    console.log('[MOCK TELEGRAM MESSAGE]\n' + text);
    return;
  }

  if (!token || !chatId) {
    throw new Error('Telegram is not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.');
  }

  const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  const response = await fetch(telegramUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
    }),
  });

  const telegramPayload = (await response.json()) as {
    ok: boolean;
    description?: string;
  };

  if (!response.ok || !telegramPayload.ok) {
    const reason = telegramPayload.description || 'Unknown Telegram error.';
    throw new Error(`Telegram API error: ${reason}`);
  }
};

export default async function handler(req: any, res: any) {
  setCorsHeaders(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  try {
    const payload = req.body as CheckoutRequest;

    if (!payload?.customerName || !payload.customerName.trim()) {
      return res.status(400).json({ message: 'Customer name is required.' });
    }

    if (!Array.isArray(payload.items) || payload.items.length === 0) {
      return res.status(400).json({ message: 'Order items are required.' });
    }

    const hasInvalidQuantity = payload.items.some((item) => item.quantity <= 0);
    if (hasInvalidQuantity) {
      return res.status(400).json({ message: 'All quantities must be greater than zero.' });
    }

    const orderId = `FS-${Date.now()}`;
    const message = formatTelegramMessage(orderId, payload);

    await sendTelegramMessage(message);

    return res.status(201).json({
      ok: true,
      orderId,
      message: 'Order sent to stall owner on Telegram.',
    });
  } catch (error) {
    console.error('Order submission failed:', error);
    const message = error instanceof Error ? error.message : 'Failed to submit order.';
    return res.status(500).json({ message });
  }
}
