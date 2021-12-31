function CookiesManager() {}
CookiesManager.prototype.setCookie = function (cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + d.toUTCString()
  document.cookie =
    cname + '=' + JSON.stringify(cvalue) + ';' + expires + ';path=/'
}
CookiesManager.prototype.getCookie = function (cname) {
  const name = cname + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}
CookiesManager.prototype.checkCookie = function (cname) {
  const username = this.getCookie(cname)
  return username !== ''
}
const cookies = new CookiesManager()
export { cookies }
