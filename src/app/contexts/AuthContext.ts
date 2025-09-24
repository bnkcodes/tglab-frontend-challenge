import { createContext } from 'react';
import type { User, SigninResponse } from '../../shared/types/auth';

export interface AuthContextData {
  isAuthenticated: boolean;
  signin: (signinResponse: SigninResponse) => void;
  signout: () => void;
  updateUser: (userData: User) => void;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);
