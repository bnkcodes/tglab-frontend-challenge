import { api } from "@api/api";

import type { LoginResponse } from "@modules/auth/types";
import type { LoginFormValues } from "@modules/auth/validations";

export async function loginService(
  data: LoginFormValues
): Promise<LoginResponse> {

  const { data: loginResponse } = await api.post<LoginResponse>(
    "/login",
    data
  );

  return loginResponse;
}
