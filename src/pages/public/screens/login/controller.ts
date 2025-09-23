import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLogin } from "@features/auth";
import { loginSchema } from "@features/auth/validations";

export function useLoginController() {
	const { trigger, isMutating } = useLogin();

	const methods = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onBlur",
	});

	return {
		methods,
		isMutating,
		trigger,
	};
}
