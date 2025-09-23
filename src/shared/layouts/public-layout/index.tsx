import type { PropsWithChildren } from "react";
import { Outlet } from 'react-router-dom';

import { LoopingVideoBg } from "@shared/ui";

import { Card } from "./styles";

export function PublicLayout({ children }: PropsWithChildren) {
	return (
		<>
			<Card size="lg" variant="plain">
				{children ?? <Outlet />}
			</Card>

			<LoopingVideoBg />
		</>
	);
}
