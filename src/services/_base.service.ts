import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_URL } from '../constants';

abstract class BaseService {
  public http: AxiosInstance = axios.create({
    baseURL: API_URL,
  });

  constructor() {
    this.http.interceptors.request.use((config: AxiosRequestConfig) => {
      if (this.token) {
        config.headers.Authorization = `Bearer ${this.token}`;
      }

      return config;
    });
  }

  get token() {
    return localStorage.getItem('token');
  }
}

export { BaseService };
