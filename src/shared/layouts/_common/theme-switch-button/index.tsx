import IconButton from '@mui/joy/IconButton';

import { IoSunny, IoMoonSharp } from "react-icons/io5";

import { useThemeMode } from '@app/hooks/useThemeMode';

export function ThemeSwitchButton() {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <IconButton variant='outlined' size='md' onClick={toggleTheme}>
			{mode === 'light'
				? <IoMoonSharp size={20} />
				: <IoSunny size={20} />
			}
    </IconButton>
  );
}
