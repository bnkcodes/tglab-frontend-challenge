import { PublicLayout } from '@shared/layouts';

import { useLocale } from '@core/hooks/useLocale';

export function Login() {
	const { t } = useLocale();

	return (
		<>
			<PublicLayout>
				<h1>{t('login')}</h1>

			</PublicLayout>
		</>
	);
}
