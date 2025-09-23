import type { PropsWithChildren } from "react";
import { Outlet } from 'react-router-dom';

import { Container, Header } from "@shared/ui";

export function BaseLayout({ children }: PropsWithChildren) {
	return (
		<Container>
			<Header />
			{children ?? <Outlet />}
		</Container>
	);
}
