import React, { createContext, useState, ReactNode, useEffect } from 'react';

import { useProfile, useToken } from '../hooks';
import { authService } from '../services';

export const authContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { token, setToken } = useToken();
  const { profile, setProfile } = useProfile();

  useEffect(() => {
    async function getProfile() {
      try {
        const { data } = await authService.profile();
        setProfile(data.data);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }

    if (token?.length) {
      getProfile();
    }
  }, [token]);

  const logout = () => {
    setToken(null);
    setProfile(null);
  };

  return (
    <authContext.Provider value={{ profile, token, setToken, setLoading, loading, logout }}>
      {children}
    </authContext.Provider>
  );
};
