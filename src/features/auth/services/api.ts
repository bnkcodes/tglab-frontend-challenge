import { api } from '@shared/api/api';

import type { SigninResponse, SignupResponse } from '@shared/types/auth';

import type { SigninFormValues, SignupFormValues } from '@features/auth/validations';

export async function login(payload: SigninFormValues): Promise<SigninResponse> {
  const { data } = await api.post<SigninResponse>('/login', payload);
  return data;
}

export async function register(payload: SignupFormValues): Promise<SignupResponse> {
	const { data } = await api.post<SignupResponse>('/register', payload);
	return data;
}
