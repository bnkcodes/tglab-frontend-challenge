export interface User {
  id: string;
  name: string;
  balance: number;
  currency: string;
}

export interface SigninResponse {
  id: string;
  name: string;
  balance: number;
  currency: string;
  accessToken: string;
}

export interface SignupResponse {
	id: string;
	name: string;
}
