import ReactGA from 'react-ga'

const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID as string
const DEBUG = process.env.REACT_APP_GA_DEBUG as string

export const initAnalytics = (): void => {
  ReactGA.initialize(TRACKING_ID, { debug: DEBUG === 'true' })
  ReactGA.pageview(window.location.pathname + window.location.search)
}

interface Event {
  (category: string, action: string, label: string): void
}

export const trackEvent: Event = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label
  })
}
