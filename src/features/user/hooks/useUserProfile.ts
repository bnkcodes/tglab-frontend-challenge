import { useAppSelector } from '@app/store/hooks';

import { selectUserProfile } from '../store/selectors';

export function useUserProfile() {
  return useAppSelector(selectUserProfile);
}
