import { forwardRef } from 'react';
import { Icon, type IconifyIcon } from '@iconify/react';

import { Box } from './styles';

export type IconifyProps = IconifyIcon | string;

export interface Props {
  icon: IconifyProps;
	size?: number
}

export const Iconify = forwardRef<HTMLDivElement, Props>(
	({ icon, size = 20, ...other }, ref) => {
		return (
			<Box ref={ref} $size={size} {...other}>
				<Icon icon={icon} width={size} height={size} />
			</Box>
		);
	}
);
