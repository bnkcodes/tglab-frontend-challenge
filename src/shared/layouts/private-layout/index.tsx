import type { PropsWithChildren } from "react";
import { Outlet } from 'react-router-dom';
import { Stack, Typography } from "@mui/joy";

import { useLocale } from "@app/hooks";

import { Wallet } from "./_components";

export function PrivateLayout({ children }: PropsWithChildren) {
	const { t } = useLocale();

	return (
		<Stack gap={12}>
			<Stack gap={3}>
				<Typography level="h1" color="neutral">
					{t("dashboard.title")} <Typography color="primary">TG Lab</Typography>
				</Typography>

				<Wallet />
			</Stack>

			{children ?? <Outlet />}
		</Stack>
	);
}
