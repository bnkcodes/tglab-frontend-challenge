import { Iconify } from '@shared/components';
import { useThemeMode } from '@core/hooks/useThemeMode';

export function ThemeSwitchButton() {
  const { resolvedMode, toggleTheme } = useThemeMode();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      style={{ width: 40, height: 40, borderRadius: 8 }}
    >
      <Iconify
				icon={resolvedMode === 'dark' ? 'mdi:white-balance-sunny' : 'mdi:moon-waning-crescent'}
				size={20}
			/>
    </button>
  );
}
