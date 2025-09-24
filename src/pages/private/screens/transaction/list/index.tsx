import { Typography } from "@mui/joy";

import { useLocale } from "@app/hooks";

export function Transactions() {
	const { t } = useLocale();

	return (
		<Typography level="title-lg">
			{t("tabs.transactions")}
		</Typography>
	);
}
