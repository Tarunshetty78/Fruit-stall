<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/218b916b-de41-4567-b012-fee7a826422c

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Backend + Telegram Checkout Demo

This project now includes a backend endpoint that receives checkout orders and sends them to Telegram.

### What was added

- Backend server: `server/index.ts`
- Health endpoint: `GET /api/health`
- Checkout endpoint: `POST /api/orders`
- Frontend checkout integration with customer name input in `src/pages/Cart.tsx`

### Environment setup

Copy `.env.example` to `.env` and set:

- `PORT=8787`
- `TELEGRAM_BOT_TOKEN=...`
- `TELEGRAM_CHAT_ID=...`
- `TELEGRAM_MOCK_MODE=false`
- `CORS_ORIGIN=*` (or set your frontend URL, for example `https://your-frontend-domain.com`)

For frontend production deployments where API is hosted separately, set:

- `VITE_API_BASE_URL=https://your-backend-domain.com`

If frontend and backend are served from the same origin, you can keep `VITE_API_BASE_URL` unset.

Use `TELEGRAM_MOCK_MODE=true` if you want to demo backend logic without sending real Telegram messages.

### Create your Telegram bot

1. Open Telegram and search for `@BotFather`.
2. Send `/newbot` and follow prompts.
3. Copy the bot token BotFather gives you.
4. Put it in `.env` as `TELEGRAM_BOT_TOKEN`.

### Get your Telegram chat ID

For personal chat:

1. Start chat with your bot and send any message (for example: `hello`).
2. Open this URL in browser (replace token):
   `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Find `chat.id` in the JSON response.
4. Put that value in `.env` as `TELEGRAM_CHAT_ID`.

For group chat:

1. Create a Telegram group and add your bot.
2. Send one message in that group.
3. Call `getUpdates` URL again.
4. Use the group `chat.id` (usually starts with `-100...`) as `TELEGRAM_CHAT_ID`.

### Run the demo

Run in two terminals:

1. Backend:
   `npm run server`
2. Frontend:
   `npm run dev`

Then open the app, add products to cart, enter customer name, and click `Confirm Order`.
The backend sends a formatted order message to your Telegram chat.

## How the backend works (simple explanation)

Think of the backend as a **middle helper** between your website and Telegram.

When someone clicks **Confirm Order** in the cart:

1. The website (frontend) collects the cart items and customer name and sends them to the backend at `POST /api/orders`.
2. The backend checks if the data is valid — is there a customer name? Are there items in the cart? Are all quantities greater than zero?
3. The backend creates a unique order ID like `FS-17123456789` using the current timestamp.
4. The backend formats a clean, readable text message with all the order details.
5. The backend sends that message to your Telegram chat using your bot.
6. The backend replies to the website with success (or an error), and the website shows that to the customer.

### Backend files

| File | Purpose |
|------|---------|
| `server/index.ts` | Local Express server — used when running backend on your own computer |
| `api/orders.ts` | Vercel serverless order endpoint — used when deployed to Vercel |
| `api/health.ts` | Vercel serverless health endpoint — used when deployed to Vercel |

The same logic exists in both places so the app works for:
- **local development** (`npm run server`)
- **Vercel deployment** (automatic `/api/*` routes)

### Endpoints

#### `GET /api/health`

A quick ping to check if the backend is alive and running.

Returns:
```json
{ "ok": true, "service": "fruit-stall-backend", "telegramMockMode": false }
```

#### `POST /api/orders`

Receives the checkout order as JSON and sends a Telegram message.

**Validates:**
- `customerName` is not empty
- `items` array is not empty
- every item has a quantity greater than zero

**On success** → returns `201` with `orderId`

**On bad input** → returns `400` with an error message

**On Telegram/config problems** → returns `500` with an error message

### How Telegram sending works

The backend uses two environment variables:

- `TELEGRAM_BOT_TOKEN` — identifies which bot to use
- `TELEGRAM_CHAT_ID` — the chat or group where messages are sent

It calls the Telegram API at:

```
https://api.telegram.org/bot<YOUR_TOKEN>/sendMessage
```

If Telegram replies with an error (wrong token, wrong chat ID, etc.), the backend catches it and returns that error to the frontend.

### Mock mode (safe demo mode)

If you set `TELEGRAM_MOCK_MODE=true` in your `.env`:

- The backend does **not** send any real Telegram messages.
- Instead, it prints the message in the server console (terminal).

This is great for testing the full checkout flow without spamming a real chat or needing a real bot token.

### CORS — what it is and why it matters

CORS (Cross-Origin Resource Sharing) controls which websites are allowed to call your backend.

- `CORS_ORIGIN=*` → allow any website to call your backend (easy for demos and local testing)
- `CORS_ORIGIN=https://your-frontend.com` → only your specific frontend can call it (better for production)

### How the frontend connects to the backend

In `src/pages/Cart.tsx`, when you click **Confirm Order**, the cart page sends an HTTP POST request to:

```
${VITE_API_BASE_URL}/api/orders
```

- If `VITE_API_BASE_URL` is **not set** → it calls `/api/orders` on the same domain (works when frontend and backend share a domain, like on Vercel).
- If `VITE_API_BASE_URL` **is set** → it calls that full URL (use this when frontend and backend are hosted separately).

---

## Vercel deployment notes

If you deploy this app to Vercel, the API routes must exist under the root `api/` folder.
This repository now includes:

- `api/orders.ts`
- `api/health.ts`

Set these Vercel environment variables in Project Settings:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `TELEGRAM_MOCK_MODE` (`true` or `false`)
- `CORS_ORIGIN` (set to your frontend origin, or leave unset for default behavior)

When frontend and API are on the same Vercel domain, keep frontend requests as `/api/orders`.
