import { TAuthResponse, TUser, TUserLogin, TUserSignUp } from '../types';

import authStore from '@features/auth/store/authStore';
import api from '@shared/api';

export const authLogin = async (data: TUserLogin): Promise<TUser | string> => {
  try {
    const response = await api.post<TAuthResponse>('/auth/login', data);
    authStore.setUserDataLogin(data, response.data.accessToken);
    localStorage.setItem('accessToken', response.data.accessToken);
    return response.data;
  } catch (e) {
    return e.response.data.message;
  }
};

export const authSignup = async (data: TUserSignUp): Promise<TUser> => {
  delete data.passwordSubmit;
  try {
    const response = await api.post<TAuthResponse>('/auth/signup', data);
    authStore.setUserDataLogin(data, response.data.accessToken);
    localStorage.setItem('accessToken', response.data.accessToken);
    return response.data;
  } catch (e) {
    return e.response.data.message;
  }
};
