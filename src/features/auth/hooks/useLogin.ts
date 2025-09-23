import { useNavigate } from 'react-router';
import useSWRMutation from 'swr/mutation';

import { toMutationFn } from '@shared/api/swr';
import type { SigninResponse } from '@shared/types/auth';

import { useAuth } from '@app/hooks/useAuth';

import type { SigninFormValues } from '@features/auth/validations';

import { login } from '../services/api';

export function useLogin() {
  const navigate = useNavigate();
  const { signin } = useAuth();

  const key = '/login';
  const fetcher = toMutationFn<SigninFormValues, SigninResponse>(login);

  const mutation = useSWRMutation<SigninResponse, any, string, SigninFormValues>(key, fetcher, {
    onSuccess: (signinResponse: SigninResponse) => {
      signin(signinResponse);
      navigate('/');
    },
  });

  return mutation;
}
