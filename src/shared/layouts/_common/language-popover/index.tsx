import { DropdownMenu } from 'radix-ui';
import { allLangs } from 'locales/config-lang';

import { useLocale } from '@core/hooks/useLocale';

import { Iconify } from '@shared/components/iconifly';

import { Content, Label, RadioItem, TriggerButton } from './styles';

export default function LanguageDropdown() {
  const { currentLang, onChangeLang } = useLocale();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <TriggerButton>
          <Iconify icon={currentLang.icon} size={22} />
        </TriggerButton>
      </DropdownMenu.Trigger>

      <Content sideOffset={6} align="end">
        <DropdownMenu.RadioGroup
          value={currentLang.value}
          onValueChange={onChangeLang}
        >
          {allLangs.map((opt) => (
            <RadioItem
              key={opt.value}
              value={opt.value}
            >
              <Iconify icon={opt.icon} size={18} />
              <Label>{opt.label}</Label>
              <DropdownMenu.ItemIndicator>
                <Iconify icon="mdi:check" size={16} />
              </DropdownMenu.ItemIndicator>
            </RadioItem>
          ))}
        </DropdownMenu.RadioGroup>
      </Content>
    </DropdownMenu.Root>
  );
}
