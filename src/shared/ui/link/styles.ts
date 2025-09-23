import styled from "styled-components";
import { Link as RouterLink } from "react-router";

export const StyledLink = styled(RouterLink)`
  color: ${({ theme }) => theme.brand.main};
  text-decoration: none;
	font-weight: 600;
	transition: color 0.3s;

  &:hover {
		color: ${({ theme }) => theme.brand.light};
  }
`;
