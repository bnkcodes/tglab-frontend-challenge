import React from 'react';

import MuiAlert from '@mui/joy/Alert';
import { Box, IconButton, Typography} from '@mui/joy';

import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ReportIcon from '@mui/icons-material/Report';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import type { ColorType, CustomAlertProps } from './types';

const icons: Record<ColorType, React.ReactNode> = {
	neutral: <InfoIcon />,
	success: <CheckCircleIcon />,
	warning: <WarningIcon fontSize='large' />,
	danger: <ReportIcon />,
};

export function Alert({ title, description, color, visible, onClose, ...props }: CustomAlertProps) {
	if (!visible) return null;

  return (
    <Box sx={{ display: 'flex', gap: 2, width: '100%', flexDirection: 'column' }}>
			<MuiAlert
				key={`${title}-${new Date().getTime()}`}
				startDecorator={icons[color] as any}
				variant="soft"
				color={color}
				endDecorator={
					<IconButton variant="soft" color={color} onClick={onClose}>
						<CloseRoundedIcon />
					</IconButton>
				}
				{...props}
			>
				<div>
					<Typography level='title-md'>{title}</Typography>
					<Typography level="body-xs" color={color}>
						{description}.
					</Typography>
				</div>
			</MuiAlert>
    </Box>
  );
}
