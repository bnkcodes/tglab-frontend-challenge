import { Stack, Typography } from '@mui/joy';

import { Button, Form, Link, Alert } from '@shared/ui';

import { useLocale } from '@app/hooks/useLocale';

import { useSigninController } from './controller';

export function Signin() {
	const {
		methods,
		isMutating,
		isErrorDismissed,
		trigger,
		dismissError,
	} = useSigninController();

	const { t } = useLocale();

	return (
		<Stack gap={5} alignItems="center">
			<Stack gap={1} alignItems="center">
				<Typography level="h3">{t('pages.signin.title')}</Typography>

				<Typography level="body-md">
					{t('pages.signin.subtitle')} <Link to="/signup">{t('pages.signin.createAccount')}</Link>
				</Typography>
			</Stack>

			<Form methods={methods} onSubmit={trigger}>
				<Stack gap={2} mb={4}>
					<Alert
						title={t('actions.error')}
						description={t('pages.signin.form.error.invalidCredentials')}
						color="danger"
						variant="soft"
						visible={!isErrorDismissed}
						onClose={dismissError}
						sx={{ mb: 1 }}
					/>

					<Form.Input
						name="email"
						label={t('pages.signin.form.email')}
						type="email"
					/>

					<Form.Input
						name="password"
						label={t('pages.signin.form.password')}
						type="password"
					/>
				</Stack>

				<Button
					type="submit"
					size='lg'
					loading={isMutating}
					fullWidth
				>
					{t('pages.signin.form.submit')}
				</Button>
			</Form>
		</Stack>
	);
}
