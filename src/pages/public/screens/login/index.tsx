import { Form } from '@shared/ui/form';

import { useLocale } from '@app/hooks/useLocale';

import { useLoginController } from './controller';

export function Login() {
	const {
		methods,
		trigger,
	} = useLoginController();

	const { t } = useLocale();

	return (
		<>
			<h1>{t('login')}</h1>

			<Form methods={methods} onSubmit={trigger}>
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
