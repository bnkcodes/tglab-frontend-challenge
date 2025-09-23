import type { LinkProps } from "react-router";
import { StyledLink } from "./styles";

export const Link = ({ children, ...props }: LinkProps) => {
	return (
		<StyledLink {...props}>{children}</StyledLink>
	)
};
