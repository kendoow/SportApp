import { makeAutoObservable } from 'mobx'
import { TUser } from '@features/auth/types'

class AuthStore {
  acessToken = localStorage.getItem('accessToken')
  email = ''
  password = ''

  constructor() {
    makeAutoObservable(this)
  }

  setUserData(userData: TUser)   {
    const { password, email } = userData
    this.email = email
    this.password = password
  }

}

const authStore = new AuthStore()

export default authStore