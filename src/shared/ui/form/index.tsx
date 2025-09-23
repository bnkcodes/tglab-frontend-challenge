import React from "react";
import { FormProvider } from "react-hook-form";
import { RefreshErrorsOnLocaleChange } from "./components/refresh-errors-on-locale-change";

import { FormInput, FormSelect} from "./components";
import { type FormProps } from "./types";

const FormComponent: React.FC<FormProps> & {
  Input: typeof FormInput;
  Select: typeof FormSelect;
} = ({ methods, children, className, onSubmit, ...props }) => {
  return (
    <FormProvider {...methods}>
      <RefreshErrorsOnLocaleChange />
      <form
        className={className}
        onSubmit={methods.handleSubmit(onSubmit)}
        style={{ width: "100%" }}
        noValidate
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
};

FormComponent.Input = FormInput;
FormComponent.Input.displayName = "Form.Input";

FormComponent.Select = FormSelect;
FormComponent.Select.displayName = "Form.Select";

export const Form = FormComponent;
