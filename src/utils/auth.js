import Cookies from 'js-cookie'

const key = "lmssessionid" //'ledger_management_system_session'

export function  getKey() {
  return key;
}

export function getAuth() {
  return Cookies.get(key)
}

export function setAuth(auth) {
  return Cookies.set(key, auth)
}

export function removeAuth() {
  return Cookies.remove(key)
}

export default {
  setAuth,
  getAuth,
  getKey,
  removeAuth,
}
