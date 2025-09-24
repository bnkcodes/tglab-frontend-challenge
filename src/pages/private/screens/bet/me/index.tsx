import { Typography } from "@mui/joy";

import { useLocale } from "@app/hooks";

export function MyBets() {
	const { t } = useLocale();

	return (
		<Typography level="title-lg">
			{t("tabs.myBets")}
		</Typography>
	);
}
