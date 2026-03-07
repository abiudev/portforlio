import posthog from 'posthog-js'

const posthogKey = import.meta.env.VITE_POSTHOG_KEY
const posthogHost = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com'
export const analyticsEnabled = Boolean(posthogKey) && typeof window !== 'undefined'

if (analyticsEnabled) {
  posthog.init(posthogKey, {
    api_host: posthogHost,
    person_profiles: 'identified_only',
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
    defaults: '2026-01-30',
    debug: import.meta.env.DEV,
  })

  window.posthog = posthog
} else if (typeof window !== 'undefined' && import.meta.env.DEV) {
  console.warn(
    'PostHog disabled: set VITE_POSTHOG_KEY in .env.local and restart the dev server.',
  )
}

export const trackEvent = (eventName, properties = {}) => {
  if (!analyticsEnabled) return
  posthog.capture(eventName, properties)
}

export default posthog
