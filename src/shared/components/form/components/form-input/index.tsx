import { forwardRef } from "react";

import { Input } from "@shared/components/data-entry";

import type { FormInputProps } from "../../types";
import { FormField } from "../form-field";

export const FormInput = forwardRef<HTMLInputElement, Omit<FormInputProps, 'children'>>(
	({ name, ...props }, ref) => (
		<FormField name={name}>
			<Input ref={ref} name={name} {...props} />
		</FormField>
	)
);

FormInput.displayName = "Form.Input";
