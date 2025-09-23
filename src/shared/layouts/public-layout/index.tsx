import type { PropsWithChildren } from "react";
import { Outlet } from 'react-router-dom';

import { Container, Header } from "@shared/ui";

import { LoopingVideoBg } from "@modules/auth/components";
import { Card, Content } from "./styles";

export function PublicLayout({ children }: PropsWithChildren) {
	return (
		<>
			<Container>
				<Header />

				<Content>
					<Card>
						{children ?? <Outlet />}
					</Card>
				</Content>
			</Container>

			<LoopingVideoBg />
		</>
	);
}
