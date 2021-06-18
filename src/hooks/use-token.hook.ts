import { useState } from 'react';

export function useToken() {
  const [token, placeToken] = useState<string | null>(window.localStorage.getItem('token'));

  const saveToken = (t: string | null) => {
    if (t === null) {
      window.localStorage.removeItem('token');
      return;
    }

    window.localStorage.setItem('token', t as string);
    placeToken(t);
  };

  return { token, setToken: saveToken };
}
