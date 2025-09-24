import styled from "styled-components";

import MuiModal from '@mui/joy/Modal';
import MuiBox from '@mui/joy/Box';

export const Modal = styled(MuiModal)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ActionContainer = styled(MuiBox)`
	margin-top: 8px;
	display: flex;
	gap: 8px;

	flex-direction: row-reverse;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;
