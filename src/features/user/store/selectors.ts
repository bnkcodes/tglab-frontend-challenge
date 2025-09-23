import type { RootState } from '@app/store';

export const selectUserBalanceState = (state: RootState) => state.userBalance;

export const selectBalance = (state: RootState) => selectUserBalanceState(state).balance;

export const selectIsLoading = (state: RootState) => selectUserBalanceState(state).isLoading;
