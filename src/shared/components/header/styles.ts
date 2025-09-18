import styled from "styled-components";

export const HeaderContainer = styled.header`
	background-color: transparent ;
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);

	padding: 24px;
	color: white;

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
`;


export const HeaderContent = styled.div`
	max-width: 1200px;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
`;

export const Logo = styled.img`
	height: 40px;
	object-fit: contain;
`;

export const RightSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
`;

export const ThemeToggleButton = styled.button`
	padding: 8px 16px;
	border-radius: 8px;

	background: ${({ theme }) => theme.button.primary.bg};
	color: ${({ theme }) => theme.button.primary.text};
	border: 1px solid ${({ theme }) => theme.button.primary.border};
	transition: all 0.2s ease;

	&:hover {
		background: ${({ theme }) => theme.button.primary.hover.bg};
		color: ${({ theme }) => theme.button.primary.hover.text};
		border-color: ${({ theme }) => theme.button.primary.hover.border};
	}
`;

export const LanguageSelectorWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
