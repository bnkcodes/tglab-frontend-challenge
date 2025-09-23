import IconButton from '@mui/joy/IconButton';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

import { useThemeMode } from '@app/hooks/useThemeMode';

export function ThemeSwitchButton() {
  const { resolvedMode, toggleTheme } = useThemeMode();

  return (
    <IconButton variant='outlined' size='sm' onClick={toggleTheme}>
			{resolvedMode === 'light'
				? <DarkModeRoundedIcon />
				: <LightModeRoundedIcon />
			}
    </IconButton>
  );
}
