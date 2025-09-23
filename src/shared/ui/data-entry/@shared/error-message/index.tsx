import { Typography } from "@mui/joy";
import type { ErrorMessageProps } from "./types";

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
	return (
		<Typography level="body-xs" style={{ color: 'red' }}>
			{message}
		</Typography>
	);
}
