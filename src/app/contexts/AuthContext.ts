import { createContext } from 'react';
import type { SigninResponse } from '../../shared/types/auth';

export interface AuthContextData {
  isAuthenticated: boolean;
  signin: (signinResponse: SigninResponse) => void;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);
