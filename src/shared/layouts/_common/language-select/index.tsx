import { allLangs } from 'locales/config-lang';

import { Iconify } from '@shared/ui';
import { useLocale } from '@app/hooks/useLocale';

import { Select } from '@shared/ui/data-entry';

export function LanguageSelect() {
	const { t } = useLocale();
  const { currentLang, onChangeLang } = useLocale();

  return (
		<Select
			onChange={onChangeLang}
			defaultValue={currentLang.value}
			variant='outlined'
			options={allLangs.map(lang => ({
				label: t(`language.${lang.value}` as any),
				value: lang.value,
				icon: <Iconify icon={lang.icon} />
			}))}
		/>
  );
}
