import type { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';

import { swrFetcher } from '@shared/api/swr';

export function SWRProvider({ children }: PropsWithChildren) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, revalidateOnFocus: false }}>
      {children}
    </SWRConfig>
  );
}
