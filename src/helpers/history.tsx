import { createBrowserHistory } from 'history'

declare global { interface Window { redirect: any; } }

export const history = createBrowserHistory({ basename: '/' })

window.redirect = history.push