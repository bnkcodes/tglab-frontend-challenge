import { useAppDispatch, useAppSelector } from '@app/store/hooks';

import {
	setBalance,
	addToBalance,
	subtractFromBalance,
	clearBalance,
	selectBalance
} from '../store';

export function useUserBalance() {
  const dispatch = useAppDispatch();
  const balance = useAppSelector(selectBalance);

  const updateBalance = (newBalance: number) => {
    dispatch(setBalance(newBalance));
  };

  const addBalance = (amount: number) => {
    dispatch(addToBalance(amount));
  };

  const subtractBalance = (amount: number) => {
    dispatch(subtractFromBalance(amount));
  };

  const clearUserBalance = () => {
    dispatch(clearBalance());
  };

  return {
    balance,
    updateBalance,
    addBalance,
    subtractBalance,
    clearUserBalance,
  };
}
