import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@app/store/hooks';

import {
	setBalance, addToBalance, subtractFromBalance, selectBalance
} from '../store';

export function useUserBalance() {
  const dispatch = useAppDispatch();
  const balance = useAppSelector(selectBalance);

  const updateBalance	= useCallback((v: number) => dispatch(setBalance(v)), [dispatch]);
  const addBalance = useCallback((v: number) => dispatch(addToBalance(v)), [dispatch]);
  const subtractBalance = useCallback((v: number) => dispatch(subtractFromBalance(v)), [dispatch]);

  return { balance, updateBalance, addBalance, subtractBalance };
}
