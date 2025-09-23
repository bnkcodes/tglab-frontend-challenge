import { forwardRef } from "react";

import { Select } from "@shared/ui/data-entry";

import type { FormSelectProps } from "../../types";
import { FormField } from "../form-field";

export const FormSelect = forwardRef<HTMLButtonElement, Omit<FormSelectProps, 'children'>>(
	({ name, ...props }, ref) => (
		<FormField name={name}>
			<Select ref={ref} name={name} {...props} />
		</FormField>
	)
);

FormSelect.displayName = "Form.Select";
