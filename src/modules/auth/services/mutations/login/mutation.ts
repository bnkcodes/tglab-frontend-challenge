import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import useSWRMutation from 'swr/mutation'

import { toMutationFn } from '@shared/api/swr';

import { useLocale } from "@app/hooks/useLocale";
import { useAuth } from "@app/hooks/useAuth";

import type { LoginFormValues } from "@modules/auth/validations";
import type { LoginResponse } from "@modules/auth/types/login-response";

import { loginService } from "./service";
import type { UseLoginMutationOptions } from "./types";

export function useLoginMutation(options?: UseLoginMutationOptions) {
  const navigate = useNavigate();
  const { signin } = useAuth();

  const { t } = useLocale();

  const key = '/auth/login';
  const fetcher = toMutationFn<LoginFormValues, LoginResponse>(loginService);

  const mutation = useSWRMutation<LoginResponse, any, string, LoginFormValues>(key, fetcher, {
    onSuccess: (loginResponse: LoginResponse) => {
      signin(loginResponse);
      toast.success(t('auth.login.success'));
      navigate('/');
    },
    ...options,
  });

  return mutation;
}
