import cookie from 'js-cookie'
import { history } from '../helpers/history'

export default function auth(user: string, password: string) {

  cookie.set('auth', 'true')
  history.push('/app/home')
  return true

}

export function logged() {

  if (cookie.get('auth') === 'true') {
    return true
  } else {
    return false
  }

}

export function logout() {

  if (cookie.get('auth') === 'true') {
    cookie.set('auth', 'false')
  }
  history.push('/login')

}