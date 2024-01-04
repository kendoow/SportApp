import { makeAutoObservable } from 'mobx';

import { TUser } from '@features/auth/types';

class AuthStore {
  accessToken = localStorage.getItem('accessToken');
  email = '';
  password = '';

  constructor() {
    makeAutoObservable(this);
  }

  setUserDataLogin(userData: TUser, accessToken: string) {
    const { password, email } = userData;
    this.email = email;
    this.password = password;
    this.accessToken = accessToken;
  }

  setUserDataLogout() {
    this.email = '';
    this.password = '';
    this.accessToken = '';
  }
}

const authStore = new AuthStore();

export default authStore;
