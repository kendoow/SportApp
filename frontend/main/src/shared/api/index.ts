import axios, { InternalAxiosRequestConfig } from 'axios';

import { BASE_URL } from '@shared/lib/constants/env';

const api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export const defaultApi = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

api.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  if (config && config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  }
  return config;
});

export default api;
