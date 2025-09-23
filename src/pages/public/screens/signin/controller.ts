import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLogin } from "@features/auth";
import { signinSchema } from "@features/auth/validations";

export function useSigninController() {
	const [isErrorDismissed, setIsErrorDismissed] = useState(true);

	const { trigger, error, isMutating } = useLogin();

	const methods = useForm({
		resolver: zodResolver(signinSchema),
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
