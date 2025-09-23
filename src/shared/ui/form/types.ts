import { type UseFormReturn } from "react-hook-form";

import type { InputProps } from "../data-entry/input/types";
import type { SelectProps } from "../data-entry/select/types";

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  onSubmit: (data: any) => void;
  methods: UseFormReturn<any>;
  children: React.ReactNode;
  className?: string;
}

export interface FormFieldProps {
  name: string;
  value?: any;
  initialValue?: any;
  onChange?: (e: any) => void;
  children: React.ReactElement;
}

export type FormInputProps = InputProps & FormFieldProps;
export type FormSelectProps = Omit<SelectProps, 'onChange'> & FormFieldProps;
