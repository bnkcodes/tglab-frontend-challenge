import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';

export const Trigger = styled(Select.Trigger)`
  border-radius: 60px;
	padding: 10px ;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  color: ${({ theme }) => theme.button.secondary.text};
  background: ${({ theme }) => theme.button.secondary.bg};
  border: 1px solid ${({ theme }) => theme.button.secondary.border};
  transition: background .2s ease, border-color .2s ease, color .2s ease;

  outline: none;
  -webkit-tap-highlight-color: transparent;
  appearance: none;

  &:hover,
  &[data-state='open'] {
    color: ${({ theme }) => theme.button.secondary.hover.text};
    background: ${({ theme }) => theme.button.secondary.hover.bg};
    border-color: ${({ theme }) => theme.button.secondary.hover.border};
  }

  .chevron {
		transition: transform .2s ease; transform: rotate(0deg);
	}

  &[data-state='open'] .chevron {
		transform: rotate(-180deg);
	}
`;

export const Content = styled(Select.Content)`
  min-width: 160px;
  padding: 6px;
  border-radius: 8px;

  background: ${({ theme }) => theme.background.surface};
  color: ${({ theme }) => theme.text.primary};
  border: 1px solid ${({ theme }) => theme.text.muted};
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
`;

export const Item = styled(Select.Item)`
  display: flex;
  align-items: flex-start;

  gap: 8px;

  padding: 8px 10px;
  border-radius: 6px;

  cursor: pointer;
  outline: none;
  user-select: none;

  &[data-highlighted] {
    background: ${({ theme }) => theme.button.secondary.hover.bg};
    color: ${({ theme }) => theme.button.secondary.hover.text};
  }

  &[data-disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`;
