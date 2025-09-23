import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setBalance, addToBalance, subtractFromBalance, clearBalance } from '../store/user/userSlice';

export function useUserBalance() {
  const dispatch = useAppDispatch();
  const { balance, isLoading } = useAppSelector((state) => state.userBalance);

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
