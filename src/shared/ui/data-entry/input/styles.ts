import styled from "styled-components";

export const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	gap: 8px;

	> div {
		z-index: 1;
		width: 100%;
	}
`;

export const ButtonIcon = styled.button`
	position: absolute;
	right: 8px;
	top: 50%;
	transform: translateY(-50%);
	z-index: 10;

	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px;
	border-radius: 50%;

	&:hover {
		background-color: rgba(0, 0, 0, 0.04);
	}
`;
