import type { AxiosError } from 'axios';
import type { SWRMutationConfiguration } from 'swr/mutation'

import type { LoginFormValues } from "@modules/auth/validations/login-schema";
import type { LoginResponse } from "@modules/auth/types/login-response";

export type UseLoginMutationOptions = Omit<
  SWRMutationConfiguration<LoginResponse, AxiosError<any>, string, LoginFormValues>,
  'fetcher'
>;
