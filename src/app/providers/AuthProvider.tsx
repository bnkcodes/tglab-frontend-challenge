// providers/AuthProvider.tsx
import { useCallback, useEffect, useState, type ReactNode } from 'react';
import Cookies from 'js-cookie';
import { connectSocket } from '@shared/api/socket';
import type { User } from '@shared/types/user';
import type { SigninResponse } from '@shared/types/auth';
import type { SocketBalanceUpdate } from '@shared/types/socket';
import { setUser, clearUser, setBalance } from '@features/user/store';
import { appConfig } from '../configs';
import { useAppDispatch } from '../store/hooks';
import { AuthContext, type AuthContextData } from '../contexts/AuthContext';

type AuthProviderProps = { children: ReactNode };

export function AuthProvider({ children, ...props }: AuthProviderProps) {
  const dispatch = useAppDispatch();
  const { storageKey } = appConfig.auth;

	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => !!Cookies.get(storageKey)
  );

  useEffect(() => {
    const token = Cookies.get(storageKey);
    setIsAuthenticated(!!token);
  }, [storageKey]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const s = connectSocket();

    const onBalance = ({ balance }: SocketBalanceUpdate) => {
      dispatch(setBalance(balance));
    };

    s?.on('wallet:balance', onBalance);

    return () => {
      s?.off('wallet:balance', onBalance);
    };
  }, [isAuthenticated, dispatch]);

  const signin = useCallback((signinResponse: SigninResponse) => {
    Cookies.set(storageKey, signinResponse.accessToken, {
      secure: appConfig.api.cookies.secure,
      sameSite: appConfig.api.cookies.sameSite,
      path: '/',
    });

    const userData: User = {
      id: signinResponse.id,
      name: signinResponse.name,
      balance: signinResponse.balance,
      currency: signinResponse.currency,
    };

    dispatch(setUser(userData));
    setIsAuthenticated(true);
  }, [dispatch, storageKey]);

  const signout = useCallback(() => {
		Cookies.remove(storageKey, {
			path: '/',
		});

    dispatch(clearUser());
    setIsAuthenticated(false);
  }, [dispatch, storageKey]);

  const value: AuthContextData = {
    isAuthenticated,
    signin,
    signout
  };

  return (
    <AuthContext.Provider {...props} value={value}>
      {children}
    </AuthContext.Provider>
  );
}
