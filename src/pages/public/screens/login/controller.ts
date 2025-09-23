import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLogin } from "@features/auth";
import { loginSchema } from "@features/auth/validations";
import { useEffect, useState } from "react";

export function useLoginController() {
	const [isErrorDismissed, setIsErrorDismissed] = useState(true);

	const { trigger, error, isMutating } = useLogin();

	const methods = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onBlur",
	});

	const dismissError = () => setIsErrorDismissed(true);

	useEffect(() => {
		if (error) setIsErrorDismissed(false);
	}, [error]);

	return {
		isErrorDismissed,
		methods,
		isMutating,
		trigger,
		dismissError,
	};
}
