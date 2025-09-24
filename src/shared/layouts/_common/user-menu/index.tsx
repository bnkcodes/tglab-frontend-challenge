import { useAuth } from "@app/hooks";
import { useUserProfile } from "@features/user";
import { Avatar, Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";

export const UserMenu = () => {
	const { signout } = useAuth();
	const { name } = useUserProfile();

	return (
		<Dropdown>
			<MenuButton
				variant="plain"
				sx={{ padding: 0, ml: 2 }}
			>
				<Avatar size="md" variant="soft" >
					{name?.charAt(0).toUpperCase()}
				</Avatar>
			</MenuButton>

			<Menu>
				<MenuItem onClick={signout}>Sair</MenuItem>
			</Menu>
		</Dropdown>
	);
}
