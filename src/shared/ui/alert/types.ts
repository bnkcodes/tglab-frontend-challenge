import type { AlertProps } from "@mui/joy";

export type ColorType = 'neutral' | 'success' | 'warning' | 'danger';

export interface CustomAlertProps extends AlertProps {
	title: string;
	description?: string;
	color: ColorType;
	visible?: boolean;
	onClose?: () => void;
}
