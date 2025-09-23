import { useNavigate } from 'react-router';
import useSWRMutation from 'swr/mutation';

import { toMutationFn } from '@shared/api/swr';
import type { LoginResponse } from '@shared/types/auth';

import { useAuth } from '@app/hooks/useAuth';

import type { LoginFormValues } from '@features/auth/validations';

import { login } from '../services/api';

export function useLogin() {
  const navigate = useNavigate();
  const { signin } = useAuth();

  const key = '/auth/login';
  const fetcher = toMutationFn<LoginFormValues, LoginResponse>(login);

  const mutation = useSWRMutation<LoginResponse, any, string, LoginFormValues>(key, fetcher, {
    onSuccess: (loginResponse: LoginResponse) => {
      signin(loginResponse);
      navigate('/');
    },
  });

  return mutation;
}
