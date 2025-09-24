import useSWRMutation from 'swr/mutation';
import { toast } from 'react-toastify';

import { toMutationFn } from '@shared/api/swr';
import type { DepositResponse } from '@shared/types/user';

import { useLocale } from '@app/hooks/indes';

import { deposit } from '../services/api';
import type { DepositFormValues } from '../validations';

interface UseDepositProps {
	closeModal: () => void;
}

export function useDeposit({ closeModal }: UseDepositProps) {
	const { t } = useLocale();

  const key = '/deposit';
  const fetcher = toMutationFn<DepositFormValues, DepositResponse>(deposit);

  const mutation = useSWRMutation<DepositResponse, any, string, DepositFormValues>(key, fetcher, {
    onSuccess: () => {
			toast.success(t('dashboard.deposit.success'));
			closeModal();
    },
  });

  return mutation;
}
