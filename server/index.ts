import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8787);

app.use(express.json());

interface CheckoutItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  unit: string;
  lineTotal: number;
}

interface CheckoutRequest {
  customerName: string;
  paymentMethod: string;
  items: CheckoutItem[];
  totals: {
    subtotal: number;
    deliveryFee: number;
    ecoPackaging: number;
    grandTotal: number;
  };
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const formatTelegramMessage = (orderId: string, payload: CheckoutRequest) => {
  const itemLines = payload.items
    .map(
      (item, index) =>
        `${index + 1}. ${escapeHtml(item.name)} x ${item.quantity} (${escapeHtml(item.unit)}) - Rs.${item.lineTotal}`,
    )
    .join('\n');

  return [
    `NEW FRUIT STALL ORDER`,
    `Order ID: ${orderId}`,
    `Customer: ${escapeHtml(payload.customerName)}`,
    `Payment: ${escapeHtml(payload.paymentMethod)}`,
    '',
    `Items:`,
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

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'fruit-stall-backend',
    telegramMockMode: process.env.TELEGRAM_MOCK_MODE === 'true',
  });
});

app.post('/api/orders', async (req, res) => {
  try {
    const payload = req.body as CheckoutRequest;

    if (!payload.customerName || !payload.customerName.trim()) {
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
});

app.listen(port, () => {
  console.log(`Fruit stall backend listening on http://localhost:${port}`);
});
