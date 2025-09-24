import { useLocation, Link as RouterLink } from "react-router-dom";
import { TabList, Tabs, Tab } from "@mui/joy";
import { useLocale } from "@app/hooks";

export const PagesTab = () => {
	const { t } = useLocale();
  const location = useLocation();

  const pages = [
    { name: t("tabs.bet"), href: "/" },
    { name: t("tabs.myBets"), href: "/my-bets" },
    { name: t("tabs.transactions"), href: "/transactions" },
  ];

  return (
    <Tabs
			size="lg"
			value={location.pathname}
			sx={{ width: 'fit-content', mx: 'auto' }}
		>
      <TabList>
        {pages.map((page) => (
          <Tab
						key={page.name}
						to={page.href}
            value={page.href}
            component={RouterLink}
          >
            {page.name}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};
