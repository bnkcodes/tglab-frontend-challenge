import type { PropsWithChildren } from "react";

import { Container, Header } from "@shared/components";

import { LoopingVideoBg } from "@modules/auth/components";

export function PublicLayout({ children }: PropsWithChildren) {
	return (
		<>
			<Container>
				<Header />
				{children}
			</Container>

			<LoopingVideoBg />
		</>
	);
}
