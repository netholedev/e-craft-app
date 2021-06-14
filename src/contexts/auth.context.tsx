import { AxiosError, AxiosResponse } from 'axios';
import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { profile, login as loginService, logout as logoutService } from '../services';

export interface IUser {
  email: string;
}

interface AuthContextType {
  user?: IUser;
  loading: boolean;
  errors?: string[];
  login: (data: { email: string; password: string }) => void;
  logout: () => void;
  setErrors: (errors: string[]) => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [user, setUser] = useState<IUser>();
  const [errors, setErrors] = useState<string[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (errors && errors.length) setErrors([]);
    return;
  }, [location.pathname]);

  useEffect(() => {
    profile()
      .then((res: AxiosResponse<{ data: IUser }>) => setUser(res.data.data))
      .catch((_error: string[]) => {
        // ...
      })
      .finally(() => setLoadingInitial(false));
    return;
  }, []);

  function login(body: { email: string; password: string }) {
    setLoading(true);

    loginService(body)
      .then((res: AxiosResponse<{ data: IUser }>) => {
        setUser(res.data.data);
        history.push('/');
      })
      .catch((err: AxiosError<{ messages: string[] }>) => setErrors(err.response?.data.messages))
      .finally(() => setLoading(false));
  }

  function logout() {
    logoutService().then(() => setUser(undefined));
  }

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      errors,
      login,
      logout,
      setErrors,
    }),
    [user, loading, errors],
  );

  return (
    <AuthContext.Provider value={memoedValue}>{!loadingInitial && children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
