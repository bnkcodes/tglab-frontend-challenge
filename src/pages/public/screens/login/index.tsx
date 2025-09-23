import { Form } from '@shared/components/form';

import { useLocale } from '@core/hooks/useLocale';

import { LoginController } from './login-controller';

export function Login() {
	const {
		methods,
		mutateAsync,
	} = LoginController();

	const { t } = useLocale();

	return (
		<>
			<h1>{t('login')}</h1>

			<Form methods={methods} onSubmit={mutateAsync}>
				<Form.Input
					name="email"
					label={t('email')}
					type="email"
					variant='soft'
					helperText='test'
				/>

				<Form.Input
					name="password"
					label={t('password')}
					type="password"
					variant='soft'
					required
				/>
			</Form>
		</>
	);
}
