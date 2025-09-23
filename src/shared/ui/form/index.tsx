import React from "react";
import { FormProvider } from "react-hook-form";

import { FormInput} from "./components";
import { type FormProps } from "./types";

const FormComponent: React.FC<FormProps> & {
  Input: typeof FormInput;
} = ({ methods, children, className, onSubmit, ...props }) => {

  return (
    <FormProvider {...methods}>
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

export const Form = FormComponent;
