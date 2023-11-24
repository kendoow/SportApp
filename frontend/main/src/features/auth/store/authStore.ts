import { makeAutoObservable } from 'mobx'
import { TUser } from '@features/auth/types'

class AuthStore {
  accessToken = null
  email = ''
  password = ''

  constructor() {
    makeAutoObservable(this)
  }

  setUserData(userData: TUser, accessToken: string) {
    const { password, email } = userData
    this.email = email
    this.password = password
    this.accessToken = accessToken
  }

}

const authStore = new AuthStore()

export default authStore