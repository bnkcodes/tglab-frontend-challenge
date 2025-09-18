import * as Select from '@radix-ui/react-select';

import { allLangs } from 'locales/config-lang';

import { Iconify } from '@shared/components';
import { useLocale } from '@core/hooks/useLocale';

import { Trigger, Content, Item } from './styles';

export function LanguageSelect() {
  const { currentLang, onChangeLang } = useLocale();

  return (
    <Select.Root value={currentLang.value} onValueChange={onChangeLang}>
      <Trigger>
        <Iconify icon={currentLang.icon} size={22} />

        <span className="chevron" aria-hidden>
          <Iconify icon="mdi:chevron-down" size={16} />
        </span>
      </Trigger>

      <Select.Portal>
        <Content sideOffset={6} align="end" position="popper">
          <Select.Viewport>
            {allLangs.map((lang) => (
              <Item key={lang.value} value={lang.value}>
                <Iconify icon={lang.icon} size={20} />
                <Select.ItemText>
                  {lang.label}
                </Select.ItemText>

                <Select.ItemIndicator>
                  <Iconify icon="mdi:check" size={16} />
                </Select.ItemIndicator>
              </Item>
            ))}
          </Select.Viewport>
        </Content>
      </Select.Portal>
    </Select.Root>
  );
}
