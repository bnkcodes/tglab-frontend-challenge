import styled from "styled-components";
import { Card as RadixCard } from "@radix-ui/themes";

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: calc(100vh - 200px); /* Altura da tela menos espaço do header */
	max-width: 400px;
	width: 100%;
	margin: 0 auto;
`;

export const Card = styled(RadixCard)`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 32px;
	background: ${({ theme }) => theme.background.surface};
	border-radius: 12px;
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;
