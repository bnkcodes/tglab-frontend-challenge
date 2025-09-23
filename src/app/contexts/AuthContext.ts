import { createContext } from 'react';
import type { User, LoginResponse } from '../../shared/types/auth';

export interface AuthContextData {
  signedIn: boolean;
  user: User | null;
  signin: (loginResponse: LoginResponse) => void;
  signout: () => void;
  updateUser: (userData: User) => void;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);
