import { api } from '@shared/api/api';

import type { BetResponse, DepositResponse } from '@shared/types/user';
import type { BetFormValues, DepositFormValues } from '@features/user/validations';
import type { ApiPaginateResponse, Parameters } from '@shared/types';

export async function deposit(payload: DepositFormValues): Promise<DepositResponse> {
	const { data } = await api.post<DepositResponse>('/deposit', payload);
	return data;
}

export async function bet(payload: BetFormValues): Promise<BetResponse> {
	const { data } = await api.post<BetResponse>('/bet', payload);
	return data;
}

export async function getMyBets(params: Parameters): Promise<ApiPaginateResponse<BetResponse>> {
	const { data } = await api.get<ApiPaginateResponse<BetResponse>>('/my-bets', { params });
	return data;
}

export async function cancelBet(id: string) {
  await api.delete(`/my-bet/${id}`);
}
