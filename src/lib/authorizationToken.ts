'use server'

import Cookies from 'js-cookie'

export const authorizationToken = () => {
  return Cookies.get('auth')
}
