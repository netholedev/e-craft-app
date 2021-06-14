import axios from 'axios';
import { API_URL } from '../constants';

export async function login(body: { email: string; password: string }) {
  const { data: loginData } = await axios.post(`${API_URL}/auth/login`, body);
  localStorage.setItem('token', loginData.data.token);
  const { data: profileData } = await profile();
  return profileData.data;
}

export async function profile() {
  return axios.get(`${API_URL}/auth/profile`, { headers: authHeader() });
}

export async function logout() {
  localStorage.removeItem('token');
}

export function getCurrentUser() {
  return localStorage.getItem('token');
}

export function authHeader() {
  const token = getCurrentUser();

  if (token) {
    return { Authorization: `Bearer ${token}` };
  }

  return {};
}
