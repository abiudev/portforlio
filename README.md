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
