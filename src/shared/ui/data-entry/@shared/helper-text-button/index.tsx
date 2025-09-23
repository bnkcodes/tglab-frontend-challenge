import { IconButton, Tooltip } from "@mui/joy";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import type { HelperTextButtonProps } from "./types";

export const HelperTextButton = ({ text, onClick }: HelperTextButtonProps) => {
	return (
		<Tooltip title={text} placement="top">
			<IconButton size="sm" variant="plain" onClick={onClick}>
				<HelpOutlineIcon />
			</IconButton>
		</Tooltip>
	);
};
