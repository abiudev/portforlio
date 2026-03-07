import posthog from 'posthog-js'

const posthogKey = import.meta.env.VITE_POSTHOG_KEY
const posthogHost = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com'

if (posthogKey && typeof window !== 'undefined') {
  posthog.init(posthogKey, {
    api_host: posthogHost,
    person_profiles: 'identified_only',
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
    defaults: '2026-01-30',
    debug: import.meta.env.DEV,
  })
} else if (typeof window !== 'undefined' && import.meta.env.DEV) {
  console.warn(
    'PostHog disabled: set VITE_POSTHOG_KEY in .env.local and restart the dev server.',
  )
}
