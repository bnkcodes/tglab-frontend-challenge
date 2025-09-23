import useSWRMutation from 'swr/mutation';

import { toMutationFn } from '@shared/api/swr';
import type { SignupResponse } from '@shared/types/auth';

import type { SignupFormValues } from '@features/auth/validations';

import { register } from '../services/api';
import { toast } from 'react-toastify';
import { useLocale } from '@app/hooks';

export function useRegister() {
	const { t } = useLocale();

  const key = '/register';
  const fetcher = toMutationFn<SignupFormValues, SignupResponse>(register);

  const mutation = useSWRMutation<SignupResponse, any, string, SignupFormValues>(key, fetcher, {
		onError: () => {
			toast.error(t('pages.signup.form.error.registrationFailed'));
		}
	});

  return mutation;
}
