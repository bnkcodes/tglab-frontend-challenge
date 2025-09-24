import { useCallback, useEffect, useState, type ReactNode } from 'react';
import Cookies from "js-cookie";

import type { User, SigninResponse } from '@shared/types/auth';

import { setUser, clearUser } from '@features/user/store';

import { appConfig } from '../configs';
import { useAppDispatch } from '../store/hooks';
import { AuthContext, type AuthContextData } from '../contexts/AuthContext';

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children, ...props }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	const dispatch = useAppDispatch();

	const { storageKey } = appConfig.auth;

  useEffect(() => {
    const token = Cookies.get(storageKey);
    setIsAuthenticated(!!token);
  }, []);

  const signin = useCallback((signinResponse: SigninResponse) => {
    Cookies.set(storageKey, signinResponse.accessToken, {
      secure: appConfig.api.cookies.secure,
      sameSite: appConfig.api.cookies.sameSite,
			paths: '/',
    });

    const userData: User = {
      id: signinResponse.id,
      name: signinResponse.name,
      balance: signinResponse.balance,
      currency: signinResponse.currency,
    };

    dispatch(setUser(userData));
    setIsAuthenticated(true);
  }, [dispatch]);

  const signout = useCallback(() => {
		Cookies.remove(storageKey, {
			paths: '/',
		});

    dispatch(clearUser());
    setIsAuthenticated(false);
  }, [dispatch]);

  const updateUser = useCallback((userData: User) => {
  	dispatch(setUser(userData));
  }, [dispatch]);

  const value: AuthContextData = {
    isAuthenticated,
    signin,
    signout,
    updateUser,
  };

  return (
    <AuthContext.Provider {...props} value={value}>
      {children}
    </AuthContext.Provider>
  );
}
