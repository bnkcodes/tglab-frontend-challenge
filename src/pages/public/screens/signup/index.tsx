import { Stack, Typography } from '@mui/joy';

import { Button, Form, Link } from '@shared/ui';

import { useLocale } from '@app/hooks/useLocale';

import { useSignupController } from './controller';

export function Signup() {
	const {
		methods,
		isMutating,
		trigger,
	} = useSignupController();

	const { t } = useLocale();

	return (
		<Stack gap={5} alignItems="center">
			<Stack gap={1} alignItems="center">
				<Typography level="h3">{t('pages.signup.title')}</Typography>

				<Typography level="body-md">
					{t('pages.signup.subtitle')} <Link to="/signin">{t('pages.signup.signin')}</Link>
				</Typography>
			</Stack>

			<Form methods={methods} onSubmit={trigger}>
				<Stack gap={2} mb={4}>
					<Form.Input
						name="name"
						label={t('pages.signup.form.name')}
					/>

					<Form.Input
						name="email"
						label={t('pages.signup.form.email')}
						type="email"
					/>

					<Form.Input
						name="password"
						label={t('pages.signup.form.password')}
						type="password"
					/>

					<Form.Input
						name="confirmPassword"
						label={t('pages.signup.form.confirmPassword')}
						type="password"
					/>
				</Stack>

				<Button
					type="submit"
					size='lg'
					loading={isMutating}
					fullWidth
				>
					{t('pages.signup.form.submit')}
				</Button>
			</Form>
		</Stack>
	);
}
