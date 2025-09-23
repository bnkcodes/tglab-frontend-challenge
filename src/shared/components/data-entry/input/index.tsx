import { forwardRef } from "react";
import Stack from '@mui/joy/Stack';
import MuiInput from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import VisibilityIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOffRounded';

import { Label, HelperTextButton, ErrorMessage } from "../@shared";

import { type InputProps } from "./types";

import { useInputController } from "./controller";

import { InputWrapper } from "./styles";

const PasswordVisibilityButton = ({ showPassword, onClick }: any) => {
	return (
		<IconButton size="sm" variant="soft" onClick={onClick}>
			{showPassword ? (
				<VisibilityOffIcon />
			) : (
				<VisibilityIcon />
			)}
		</IconButton>
	)
};
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, value, error, helperText, required, type, mask, ...props }, ref) => {
    const {
			maskedInputRef,
      showPassword,
      showHelperText,
      handleClickShowPassword,
			handleClickShowHelperText,
    } = useInputController({ ref, mask });

		const displayEndDecorator = () => {
			if (type === "password") {
				return (
					<PasswordVisibilityButton
						showPassword={showPassword}
						onClick={handleClickShowPassword}
					/>
				);
			}

			if (helperText) {
				return (
					<HelperTextButton
						text={helperText}
						show={showHelperText}
						onClick={handleClickShowHelperText}
					/>
				);
			}

			return null;
		};

		const hasDecorator = type === "password" || !!helperText;

    return (
      <Stack spacing={0.5}>
				{label && (
					<Label required={required}>
						{label}
					</Label>
				)}

				<InputWrapper>
					<MuiInput
						{...props}
						slotProps={{
							input: {
								ref: mask ? maskedInputRef : ref,
								type: type === "password" && !showPassword ? "password" : "text",
							}
						}}
						endDecorator={hasDecorator && displayEndDecorator()}
					/>
				</InputWrapper>

				{error && <ErrorMessage message={error} />}
			</Stack>
    );
  }
);

Input.displayName = "Input";
