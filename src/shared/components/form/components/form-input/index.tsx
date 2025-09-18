import { forwardRef } from "react";

import { Input } from "@shared/components/data-entry";

import type { FormInputProps } from "../../types";
import { FormField } from "../form-field";

export const FormInput = forwardRef<HTMLInputElement, Omit<FormInputProps, 'children'>>(({ name, ...props }, ref) => (
  <FormField name={name}>
    <Input name={name} ref={ref} {...props} />
  </FormField>
));

FormInput.displayName = "Form.Input";
