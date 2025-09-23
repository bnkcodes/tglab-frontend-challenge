import { useAppDispatch, useAppSelector } from '@app/store/hooks';
import { setBalance, addToBalance, subtractFromBalance, clearBalance } from '../store';
import { selectBalance, selectIsLoading } from '../store';

export function useUserBalance() {
  const dispatch = useAppDispatch();
  const balance = useAppSelector(selectBalance);
  const isLoading = useAppSelector(selectIsLoading);

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
    isLoading,
    updateBalance,
    addBalance,
    subtractBalance,
    clearUserBalance,
  };
}
