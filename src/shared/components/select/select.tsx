import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { styled } from 'styled-components';

export interface SelectOption {
  value: string;
  label: string;
  icon?: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  error?: string;
  className?: string;
  variant?: 'default' | 'outlined';
}

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.text.primary};
`;

const Trigger = styled(SelectPrimitive.Trigger)<{ hasError?: boolean; variant?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.hasError ? '#ef4444' : props.theme.text.muted};
  background-color: ${props => props.theme.background.base};
  color: ${props => props.theme.text.primary};
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${props => props.theme.brand.primary};
  }

  &:focus {
    border-color: ${props => props.theme.brand.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.brand.primary}20;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &[data-placeholder] {
    color: ${props => props.theme.text.secondary};
  }

  ${props => props.variant === 'outlined' && `
    background-color: transparent;
    border-width: 2px;
  `}

  .chevron {
    transition: transform 0.2s ease;
    transform: rotate(0deg);
  }

  &[data-state='open'] .chevron {
    transform: rotate(-180deg);
  }
`;

const Content = styled(SelectPrimitive.Content)`
  min-width: var(--radix-select-trigger-width);
  max-height: var(--radix-select-content-available-height);
  padding: 0.375rem;
  border-radius: 0.5rem;
  background: ${props => props.theme.background.base};
  color: ${props => props.theme.text.primary};
  border: 1px solid ${props => props.theme.text.muted};
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  z-index: 50;
`;

const Item = styled(SelectPrimitive.Item)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  cursor: pointer;
  outline: none;
  user-select: none;
  font-size: 0.875rem;

  &[data-highlighted] {
    background: ${props => props.theme.background.surface};
    color: ${props => props.theme.text.primary};
  }

  &[data-disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const ItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const ErrorMessage = styled.span`
  font-size: 0.75rem;
  color: #ef4444;
  margin-top: 0.25rem;
`;

const ChevronIcon = () => (
  <svg
    className="chevron"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6,9 12,15 18,9" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

export const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectProps
>(({ options, value, onValueChange, placeholder = "Selecione uma opção", disabled, label, error, className, variant = 'default' }, ref) => {
  const triggerId = React.useId();

  return (
    <SelectContainer className={className}>
      {label && (
        <Label htmlFor={triggerId}>
          {label}
        </Label>
      )}
      <SelectPrimitive.Root value={value} onValueChange={onValueChange} disabled={disabled}>
        <Trigger
          ref={ref}
          id={triggerId}
          hasError={!!error}
          variant={variant}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon asChild>
            <ChevronIcon />
          </SelectPrimitive.Icon>
        </Trigger>

        <SelectPrimitive.Portal>
          <Content position="popper" sideOffset={4}>
            <SelectPrimitive.Viewport>
              {options.map((option) => (
                <Item
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  <SelectPrimitive.ItemText>
                    {option.label}
                  </SelectPrimitive.ItemText>
                  <ItemIndicator>
                    <CheckIcon />
                  </ItemIndicator>
                </Item>
              ))}
            </SelectPrimitive.Viewport>
          </Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </SelectContainer>
  );
});

Select.displayName = 'Select';
