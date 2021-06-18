import { useState } from 'react';

export function useToken() {
  const [token, placeToken] = useState(window.localStorage.getItem('token'));

  const saveToken = (t: string) => {
    window.localStorage.setItem('token', t);
    placeToken(t);
  };

  return { token, setToken: saveToken };
}
