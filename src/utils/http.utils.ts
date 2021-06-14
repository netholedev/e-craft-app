import { API_URL } from '../constants';

export const GET = async (url: string) => {
  const res = await fetch(API_URL + url);
  return res.json();
};

export const POST = async (url: string, data: any) => {
  const res = await fetch(API_URL + url, {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  return res.json();
};
