import type { PropsWithChildren } from "react";

import { StyledContainer } from "./styles";

export function Container({ children }: PropsWithChildren) {
  return <StyledContainer>{children}</StyledContainer>;
}
