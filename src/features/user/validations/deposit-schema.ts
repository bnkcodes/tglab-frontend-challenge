import { z } from 'zod/v3';

import { translateHoF } from '@app/utils';

const t = translateHoF('dashboard.deposit');

export const depositSchema = z.object({
  amount: z.string()
    .transform((v, ctx) => {
      const normalized = v.replace(/\./g, '').replace(',', '.').trim();
      const n = Number(normalized);

      if (!normalized || !Number.isFinite(n)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: t('invalid_amount'),
        });
        return z.NEVER;
      }

      return n;
    })
    .pipe(
      z.number().min(1).finite()
    ),
});

export type DepositFormValues = z.infer<typeof depositSchema>;
