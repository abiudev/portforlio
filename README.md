# Portfolio

## PostHog setup

1. Copy `.env.example` to `.env.local`.
2. Set `VITE_PUBLIC_POSTHOG_KEY` to your PostHog project API key.
   `VITE_POSTHOG_KEY` is also supported for backward compatibility.
3. Set `VITE_PUBLIC_POSTHOG_HOST` to your PostHog instance host.
   `VITE_POSTHOG_HOST` is also supported for backward compatibility.
   Use `https://us.i.posthog.com` for US Cloud or `https://eu.i.posthog.com` for EU Cloud.
4. Restart the Vite dev server after changing env values.

Analytics initialization lives in `src/lib/analytics.js` and is imported once from `src/main.jsx`.
In local development, the SDK runs normally if the env vars are set and enables PostHog debug logging in the browser console.

## Vercel production setup

In Vercel Project Settings -> Environment Variables, set these for `Production`:

- `VITE_PUBLIC_POSTHOG_KEY=<your project key>`
- `VITE_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com`

After saving the variables, trigger a fresh production redeploy so Vite rebuilds the client bundle with the updated values.

The site sends a `portfolio_loaded` event on startup. After redeploying, verify the hosted site in a clean browser session and confirm the event appears in PostHog Live Events before re-running PostHog verification.
