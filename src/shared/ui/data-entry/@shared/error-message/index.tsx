import { Typography } from "@mui/joy";
import type { ErrorMessageProps } from "./types";

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
	return (
		<Typography level="body-xs" color="danger">
			{message}
		</Typography>
	);
}
