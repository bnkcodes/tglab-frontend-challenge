import React from 'react';

import { type SelectProps as JoySelectProps } from '@mui/joy/Select';

export type SelectOption = {
	label: string;
	value: string | number;
	icon?: React.ReactNode;
};

export interface SelectProps extends Omit<JoySelectProps<any, any>, 'error' | 'onChange'> {
  name?: string;
  value?: any;
	options?: SelectOption[];
	label?: string;
  initialValue?: any;
  error?: string;
  helperText?: string;
	onChange?: (value: any) => void;
}
