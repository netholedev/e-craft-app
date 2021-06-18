import React, { createContext, useState, ReactNode } from 'react';
import { ICurrentUser } from '../interfaces';

export const authContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<{ loading: boolean; data: ICurrentUser | null }>({
    loading: true,
    data: null,
  });

  const setAuthData = (data: ICurrentUser) => {
    setAuth({ loading: false, data: data });
  };

  return <authContext.Provider value={{ auth, setAuthData }}>{children}</authContext.Provider>;
};
