import MuiButton from '@mui/joy/Button';
import type { ButtonProps } from '@mui/joy/Button';

export function Button({ children, ...props }: ButtonProps) {
	return (
		<MuiButton {...props}>
			{children}
		</MuiButton>
	);
}
