import styled from 'styled-components';

import { appConfig } from '@core/configs';

export const StyledContainer = styled.div`
	position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${appConfig.header.height + 16}px 16px 0px;
`;
