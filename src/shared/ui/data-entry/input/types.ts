import { type InputProps as JoyInputProps } from '@mui/joy/Input';

export interface InputProps extends Omit<JoyInputProps, "error"> {
  name?: string;
  value?: any;
	label?: string;
	mask?: string;
  initialValue?: any;
  error?: string;
  helperText?: string;
}

export interface InputControllerProps {
	ref?: React.Ref<HTMLInputElement>;
	mask?: string;
}
