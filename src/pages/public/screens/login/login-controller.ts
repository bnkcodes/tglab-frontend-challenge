import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLoginMutation } from "@modules/auth/services/mutations/login";
import { loginSchema } from "@modules/auth/validations";

export function LoginController() {
	const { mutateAsync, isPending } = useLoginMutation();

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
		isPending,
		mutateAsync,
	};
}
