import { z } from 'zod/v3';

export const signinSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
});

export type SigninFormValues = z.infer<typeof signinSchema>;
