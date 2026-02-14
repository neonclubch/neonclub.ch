/**
 * Local development server using Hono's Node.js adapter.
 * Run with: pnpm --filter @neon/stripe-api dev
 *
 * Bypasses functions-framework for fast hot-reload via tsx watch.
 * Set STRIPE_SECRET_KEY in a .env.local file or export it in your shell.
 */
import { serve } from "@hono/node-server";
import app from "./index.js";

const port = parseInt(process.env.PORT || "8081", 10);

serve({ fetch: app.fetch, port }, (info) => {
  console.log(`Stripe API dev server running at http://localhost:${info.port}`);
});
