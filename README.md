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
