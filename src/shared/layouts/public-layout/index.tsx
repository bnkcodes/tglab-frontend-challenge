import type { PropsWithChildren } from "react";

import { Container, Header } from "@shared/components";

import { LoopingVideoBg } from "@modules/auth/components";
import { Card, Content } from "./styles";

export function PublicLayout({ children }: PropsWithChildren) {
	return (
		<>
			<Container>
				<Header />

				<Content>
					<Card>
						{children}
					</Card>
				</Content>
			</Container>

			<LoopingVideoBg />
		</>
	);
}
