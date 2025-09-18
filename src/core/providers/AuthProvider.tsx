import React from 'react';

import type { User, LoginResponse } from '../../shared/types/auth';

import { useAppDispatch } from '../store/hooks';
import { setBalance, clearBalance } from '../store/user/userSlice';
import { AuthContext, type AuthContextData } from '../contexts/AuthContext';
import { appConfig } from '../configs';

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children, ...props }: AuthProviderProps) {
  const dispatch = useAppDispatch();

  const [user, setUser] = React.useState<User | null>(null);
  const [signedIn, setSignedIn] = React.useState<boolean>(false);

  React.useEffect(() => {
    const token = localStorage.getItem(appConfig.auth.storageKey);
    setSignedIn(!token);
  }, []);

  const signin = React.useCallback((loginResponse: LoginResponse) => {
    localStorage.setItem(appConfig.auth.storageKey, loginResponse.accessToken);

    const userData: User = {
      id: loginResponse.id,
      name: loginResponse.name,
      balance: loginResponse.balance,
      currency: loginResponse.currency,
    };

    setUser(userData);
    dispatch(setBalance(loginResponse.balance));
    setSignedIn(true);
  }, [dispatch]);

  const signout = React.useCallback(() => {
    localStorage.removeItem(appConfig.auth.storageKey);
    setUser(null);
    dispatch(clearBalance());
    setSignedIn(false);
  }, [dispatch]);

  const updateUser = React.useCallback((userData: User) => {
    setUser(userData);

    if (userData.balance !== undefined) {
      dispatch(setBalance(userData.balance));
    }
  }, [dispatch]);


  const value: AuthContextData = {
    signedIn,
    user,
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
