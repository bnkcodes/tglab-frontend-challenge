import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";

import { useLocale } from "@app/hooks/useLocale";
import { useAuth } from "@app/hooks/useAuth";

import type { LoginFormValues } from "@modules/auth/validations";
import type { LoginResponse } from "@modules/auth/types/login-response";

import { loginService } from "./service";
import type { UseLoginMutationOptions } from "./types";

export function useLoginMutation(
  options?: UseLoginMutationOptions
) {
  const navigate = useNavigate();
  const { signin } = useAuth();

  const { t } = useLocale();

  return useMutation<LoginResponse, any, LoginFormValues>({
    mutationFn: loginService,
    onSuccess: (loginResponse: LoginResponse) => {
      signin(loginResponse);
      toast.success(t("auth.login.success"));
      navigate('/');
    },
    ...options,
  });
}
