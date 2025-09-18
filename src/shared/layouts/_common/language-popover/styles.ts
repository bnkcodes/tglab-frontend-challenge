import styled from 'styled-components';
import { DropdownMenu } from 'radix-ui';

export const TriggerButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 8px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.button.secondary.text};
  background: ${({ theme }) => theme.button.secondary.bg};
  border: 1px solid ${({ theme }) => theme.button.secondary.border};
  transition: all 0.2s ease;

  &:hover {
		color: ${({ theme }) => theme.button.secondary.hover.text};
    background: ${({ theme }) => theme.button.secondary.hover.bg};
    border-color: ${({ theme }) => theme.button.secondary.hover.border};
  }
`;

export const Content = styled(DropdownMenu.Content)`
  min-width: 160px;
  padding: 6px;
  border-radius: 8px;

  background: ${({ theme }) => theme.background.surface};
  color: ${({ theme }) => theme.text.primary};

  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
  border: 1px solid ${({ theme }) => theme.text.muted};
`;

export const RadioItem = styled(DropdownMenu.RadioItem)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;

  border-radius: 6px;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.button.secondary.hover.bg};
    color: ${({ theme }) => theme.button.secondary.hover.text};
  }
`;

export const Label = styled.span`
  flex: 1;
`;
