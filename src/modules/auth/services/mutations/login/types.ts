import type { UseMutationOptions } from "@tanstack/react-query";

import type { LoginFormValues } from "@modules/auth/validations/login-schema";
import type { LoginResponse } from "@modules/auth/types/login-response";

export type UseLoginMutationOptions = Omit<
  UseMutationOptions<LoginResponse, any, LoginFormValues>,
  "mutationFn"
>;
