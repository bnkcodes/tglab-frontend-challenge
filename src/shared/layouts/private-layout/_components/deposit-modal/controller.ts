import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useDeposit, depositSchema } from "@features/user";

export function useDepositController() {
	const [open, setOpen] = useState(false);

	const methods = useForm({
		resolver: zodResolver(depositSchema),
		defaultValues: {
			amount: '0',
		},
		mode: "onBlur",
	});

	const { trigger, isMutating } = useDeposit({
		closeModal: () => setOpen(false),
	});

	return {
		open,
		methods,
		isMutating,
		setOpen,
		trigger
	};
}
