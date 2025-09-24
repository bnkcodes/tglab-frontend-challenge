import { api } from '@shared/api/api';

import type { BetResponse, DepositResponse } from '@shared/types/user';
import type { BetFormValues, DepositFormValues } from '@features/user/validations';
export async function deposit(payload: DepositFormValues): Promise<DepositResponse> {
	const { data } = await api.post<DepositResponse>('/deposit', payload);
	return data;
}

export async function bet(payload: BetFormValues): Promise<BetResponse> {
	const { data } = await api.post<BetResponse>('/bet', payload);
	return data;
}
