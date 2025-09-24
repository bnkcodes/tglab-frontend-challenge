import type { PropsWithChildren } from "react";
import { Outlet } from 'react-router-dom';
import { Stack, Typography } from "@mui/joy";

import { useLocale } from "@app/hooks";

import { Wallet, PagesTab } from "./_components";

export function PrivateLayout({ children }: PropsWithChildren) {
	const { t } = useLocale();

	return (
		<Stack gap={6}>
			<Stack gap={9}>
				<Stack gap={3}>
					<Typography level="h1" color="neutral">
						{t("dashboard.title")} <Typography color="primary">TG Lab</Typography>
					</Typography>

					<Wallet />
				</Stack>

				<PagesTab />
			</Stack>

			{children ?? <Outlet />}
		</Stack>
	);
}
