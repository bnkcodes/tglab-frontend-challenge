import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useLogin, useRegister } from "@features/auth";
import { signupSchema, type SignupFormValues } from "@features/auth/validations";

export function useSignupController() {
	const { trigger: register, isMutating: isRegisterMutating } = useRegister();
	const { trigger: login, isMutating: isLoginMutating } = useLogin();

	const isMutating = isRegisterMutating || isLoginMutating;

	const trigger = async (data: SignupFormValues) => {
		const response = await register(data);

		if (response.id) {
			await login({ email: data.email, password: data.password });
		}
	};

	const methods = useForm({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		mode: "onBlur",
	});

	return {
		methods,
		isMutating,
		trigger,
	};
}
