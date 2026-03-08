import posthog from 'posthog-js'

const posthogKey =
  import.meta.env.VITE_PUBLIC_POSTHOG_KEY || import.meta.env.VITE_POSTHOG_KEY
export const analyticsEnabled = Boolean(posthogKey) && typeof window !== 'undefined'

if (analyticsEnabled) {
  posthog.init(posthogKey, {
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com',
    person_profiles: 'identified_only',
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
    debug: import.meta.env.DEV,
  })

  posthog.capture('portfolio_loaded', {
    environment: import.meta.env.MODE,
    href: window.location.href,
    path: window.location.pathname,
    host: window.location.host,
  })

  window.posthog = posthog
} else if (typeof window !== 'undefined' && import.meta.env.DEV) {
  console.warn(
    'PostHog disabled: set VITE_PUBLIC_POSTHOG_KEY or VITE_POSTHOG_KEY in .env.local and restart the dev server.',
  )
}

export const trackEvent = (eventName, properties = {}) => {
  if (!analyticsEnabled) return
  posthog.capture(eventName, properties)
}

export default posthog
