import Confetti from "react-confetti-boom";
import { Stack, Typography } from "@mui/joy";

import { useLocale } from "@app/hooks"

import { Button, Form } from "@shared/ui";

import { useCreateBet } from "./controller";

export function Bet() {
  const { t } = useLocale();

  const {
		confettiKey,
		confettiVisible,
		methods,
		isMutating,
		handleTrigger
	} = useCreateBet();

  return (
    <Form methods={methods} onSubmit={handleTrigger}>
      {confettiVisible && (
        <Confetti key={confettiKey ?? undefined} mode="boom" />
      )}

      <Stack spacing={4}>
        <Stack spacing={1}>
          <Typography level="h3">{t("pages.bet.title")}</Typography>
          <Form.Input name="amount" type="number" required />
        </Stack>

        <Button
          type="submit"
          variant="solid"
          color="primary"
          size="lg"
          loading={isMutating}
        >
          {t("pages.bet.form.submit")}
        </Button>
      </Stack>
    </Form>
  );
}
