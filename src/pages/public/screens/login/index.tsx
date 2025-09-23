import { Stack, Typography } from '@mui/joy';

import { Button, Form, Link, Alert } from '@shared/ui';

import { useLocale } from '@app/hooks/useLocale';

import { useLoginController } from './controller';

export function Login() {
	const {
		methods,
		isMutating,
		isErrorDismissed,
		trigger,
		dismissError,
	} = useLoginController();

	const { t } = useLocale();

	return (
		<Stack gap={5} alignItems="center">
			<Stack gap={1} alignItems="center">
				<Typography level="h3">{t('pages.login.title')}</Typography>

				<Typography level="body-md">
					{t('pages.login.subtitle')} <Link to="/signup">{t('pages.login.createAccount')}</Link>
				</Typography>
			</Stack>

			<Form methods={methods} onSubmit={trigger}>
				<Stack gap={2} mb={4}>
					<Alert
						title={t('actions.error')}
						description={t('pages.login.form.error.invalidCredentials')}
						color="danger"
						variant="soft"
						visible={!isErrorDismissed}
						onClose={dismissError}
						sx={{ mb: 1 }}
					/>

					<Form.Input
						name="email"
						label={t('pages.login.form.email')}
						type="email"
					/>

					<Form.Input
						name="password"
						label={t('pages.login.form.password')}
						type="password"
					/>
				</Stack>

				<Button
					type="submit"
					size='lg'
					loading={isMutating}
					fullWidth
				>
					{t('pages.login.form.submit')}
				</Button>
			</Form>
		</Stack>
	);
}
