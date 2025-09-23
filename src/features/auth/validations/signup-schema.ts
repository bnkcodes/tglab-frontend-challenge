import { z } from 'zod/v3';
import { translateHoF } from '@app/utils';

const t = translateHoF('pages.signup.form.error');

export const signupSchema = z.object({
	name: z.string().min(1),
  email: z.string().email().min(1),
  password: z.string().min(1),
	confirmPassword: z.string().min(1),
}).superRefine((data, ctx) => {
	if (data.password !== data.confirmPassword) {
		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			path: ['confirmPassword'],
			message: t('passwordsDontMatch'),
		});
	}
});

export type SignupFormValues = z.infer<typeof signupSchema>;
