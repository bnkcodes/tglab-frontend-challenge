import { api } from '@shared/api/api';

import type { LoginResponse } from '@shared/types/auth';

import type { LoginFormValues } from '@features/auth/validations';

export async function login(payload: LoginFormValues): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>('/login', payload);
  return data;
}
