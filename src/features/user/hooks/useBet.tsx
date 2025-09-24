import useSWRMutation from 'swr/mutation';
import { toast } from 'react-toastify';

import { toMutationFn } from '@shared/api/swr';
import type { BetResponse } from '@shared/types/user';

import { useLocale } from '@app/hooks/indes';

import { bet, } from '../services/api';
import type { BetFormValues } from '../validations';

interface UseDepositProps {
	onWin: () => void;
	onFail: () => void;
}

export function useBet({ onWin, onFail }: UseDepositProps) {
	const { t } = useLocale();

  const key = '/bet';
  const fetcher = toMutationFn<BetFormValues, BetResponse>(bet);

  const mutation = useSWRMutation<BetResponse, any, string, BetFormValues>(key, fetcher, {
    onSuccess: (data: BetResponse) => {
			if (data.winAmount != null) {
				onWin();
			} else {
				onFail();
				toast.error(t('pages.bet.form.error.failed'));
			}
		},
		onError: onFail
  });

  return mutation;
}
