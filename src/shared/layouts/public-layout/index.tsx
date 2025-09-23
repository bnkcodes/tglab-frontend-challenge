import type { PropsWithChildren } from "react";
import { Outlet } from 'react-router-dom';

import { Container, Header, LoopingVideoBg } from "@shared/ui";

import { Card } from "./styles";

export function PublicLayout({ children }: PropsWithChildren) {
	return (
		<>
			<Container>
				<Header />

				<Card size="lg" variant="plain">
					{children ?? <Outlet />}
				</Card>
			</Container>

			<LoopingVideoBg />
		</>
	);
}
