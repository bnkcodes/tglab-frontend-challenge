export interface User {
  id: string;
  name: string;
  balance: number;
  currency: string;
}

export interface LoginResponse {
  id: string;
  name: string;
  balance: number;
  currency: string;
  accessToken: string;
}

export interface LoginData {
  email: string;
  password: string;
}
