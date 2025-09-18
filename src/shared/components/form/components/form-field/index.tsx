import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import type { FormFieldProps } from "../../types";

export const FormField: React.FC<FormFieldProps> = ({
  name,
  children,
  onChange,
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return React.cloneElement(children, {
          ...field,
          ...props,
          error: error?.message,
          onChange: (e: any) => {
            field.onChange(e);
            if (onChange) onChange(e);
          },
        } as any);
      }}
    />
  );
};
