import styled from "styled-components";

export const Box = styled.div<{ $size: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  color: ${({ theme }) => theme.text.primary};
`;
