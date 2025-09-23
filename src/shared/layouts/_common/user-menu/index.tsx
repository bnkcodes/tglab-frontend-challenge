import { useAuth } from "@app/hooks";
import { Avatar, Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";

export const UserMenu = () => {
	const { user, signout } = useAuth();

	console.log({ user });

	return (
		<Dropdown>
			<MenuButton
				variant="plain"

				sx={{ padding: 0, ml: 2 }}
			>
				<Avatar size="md" variant="soft" />
			</MenuButton>

			<Menu>
				<MenuItem onClick={signout}>Sair</MenuItem>
			</Menu>
		</Dropdown>
	);
}
