import React from 'react';
import { styled } from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'default' | 'outlined';
}

const InputContainer = styled.div`
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

const InputField = styled.input<{ hasError?: boolean; variant?: string }>`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.hasError ? '#ef4444' : props.theme.text.muted};
  background-color: ${props => props.theme.background.base};
  color: ${props => props.theme.text.primary};
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.brand.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.brand.primary}20;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${props => props.theme.text.secondary};
  }

  ${props => props.variant === 'outlined' && `
    background-color: transparent;
    border-width: 2px;
  `}
`;

const ErrorMessage = styled.span`
  font-size: 0.75rem;
  color: #ef4444;
  margin-top: 0.25rem;
`;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, variant = 'default', className, id, ...props }, ref) => {
    const inputId = React.useId();
    const finalId = id || inputId;

    return (
      <InputContainer className={className}>
        {label && (
          <Label htmlFor={finalId}>
            {label}
          </Label>
        )}
        <InputField
          id={finalId}
          ref={ref}
          hasError={!!error}
          variant={variant}
          {...props}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputContainer>
    );
  }
);

Input.displayName = 'Input';
