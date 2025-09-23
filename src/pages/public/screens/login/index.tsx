import { Stack, Typography } from '@mui/joy';

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
		<Stack gap={2} alignItems="center">
			<Typography level="h3">{t('pages.login.title')}</Typography>

			<Form methods={methods} onSubmit={trigger}>
				<Form.Input
					name="email"
					label={t('pages.login.form.email')}
					type="email"
					helperText='test'
				/>

				<Form.Input
					name="password"
					label={t('pages.login.form.password')}
					type="password"
					required
				/>
			</Form>
		</Stack>
	);
}
