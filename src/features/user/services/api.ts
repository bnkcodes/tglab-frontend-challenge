import { api } from '@shared/api/api';

import type { DepositResponse } from '@shared/types/user';
import type { DepositFormValues } from '@features/user/validations';

export async function deposit(payload: DepositFormValues): Promise<DepositResponse> {
	const { data } = await api.post<DepositResponse>('/deposit', payload);
	return data;
}
