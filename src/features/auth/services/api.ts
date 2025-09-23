import { api } from '@shared/api/api';

import type { LoginResponse } from '@modules/auth/types';
import type { LoginFormValues } from '@modules/auth/validations';

export async function login(payload: LoginFormValues): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>('/login', payload);
  return data;
}
