import { type TextFieldProps } from "@mui/material/TextField";
import { type MaskFunctions } from "@core/utils/masks";

export interface InputProps extends Omit<TextFieldProps, "error"> {
  name?: string;
  value?: any;
  mask?: keyof MaskFunctions;
  initialValue?: any;
  error?: boolean;
  helperText?: string;
  instructions?: string;
}
