import styled from "styled-components";

export const FooterVideoWrapper = styled.footer`
  position: absolute;
	bottom: 0;
  isolation: isolate;

  width: 100%;
  height: 100%;
	max-height: 50vh;
`;

export const BgVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const LoopingVideoBgOverlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
	z-index: 1;

  background: ${({ theme }) =>
    `linear-gradient(
      to bottom,
      ${theme.background.base} 0%,
      ${theme.background.overlay} 100%
    )`};

  pointer-events: none;
`;
