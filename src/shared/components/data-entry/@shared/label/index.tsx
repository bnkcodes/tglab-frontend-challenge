import { LabelText } from "./styles";
import type { LabelProps } from "./types";

export const Label = ({ children, required, ...rest }: LabelProps) => {
	const text = required ? `${children} *` : children;

	return (
		<LabelText {...rest}>
			{text}
		</LabelText>
	);
}
