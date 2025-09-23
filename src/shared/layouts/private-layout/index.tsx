import type { PropsWithChildren } from "react";
import { Outlet } from 'react-router-dom';

export function PrivateLayout({ children }: PropsWithChildren) {
	return (
		<>
			{children ?? <Outlet />}
		</>
	);
}
