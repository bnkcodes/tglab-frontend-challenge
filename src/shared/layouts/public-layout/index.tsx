import type { PropsWithChildren } from "react";

import { Container } from "@shared/components";

export function PublicLayout({ children }: PropsWithChildren) {
	return (
		<Container>
			{children}
		</Container>
	);
}
