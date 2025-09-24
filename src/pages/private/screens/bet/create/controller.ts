import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLocale } from "@app/hooks";
import { betSchema } from "@features/user";
import { useBet, useUserBalance } from "@features/user/hooks";

export function useCreateBet() {
  const [confettiKey, setConfettiKey] = useState<number | null>(null);
  const [confettiVisible, setConfettiVisible] = useState(false);
  const hideTimerRef = useRef<number | null>(null);

  const { t } = useLocale();
  const { balance } = useUserBalance();

  const methods = useForm({
    resolver: zodResolver(betSchema),
    defaultValues: { amount: "0" },
    mode: "onBlur",
  });

  const startConfetti = () => {
    setConfettiKey(Date.now());
    setConfettiVisible(true);

    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }

    hideTimerRef.current = setTimeout(() => {
      setConfettiVisible(false);
      hideTimerRef.current = null;
    }, 2000);
  };

  const stopConfetti = () => {
    setConfettiVisible(false);

    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  const { trigger, isMutating } = useBet({
    onWin: startConfetti,
    onFail: stopConfetti,
  });

  const handleTrigger = (data: any) => {
    const amountNum = Number(data.amount);

    if (amountNum > balance) {
      methods.setError("amount", {
        type: "manual",
        message: t("pages.bet.form.error.insufficientBalance"),
      });

      return;
    }

    trigger(data);
  };

  return {
    confettiKey,
    confettiVisible,
    methods,
    isMutating,
    handleTrigger,
  };
}
