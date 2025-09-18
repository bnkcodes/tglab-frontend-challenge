import { PublicLayout } from '@shared/layouts';

import { useLocale } from '@core/hooks/useLocale';

export function Login() {
	const { t } = useLocale();

	return (
		<>
			<PublicLayout>
				<h1>{t('hello')}</h1>
			</PublicLayout>
		</>
	);
}
