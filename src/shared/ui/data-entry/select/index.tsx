import { forwardRef } from "react";
import { ListItemDecorator, Option, Stack } from "@mui/joy";
import MuiSelect from "@mui/joy/Select";

import { ErrorMessage, Label } from "../@shared";

import type { SelectProps } from "./types";

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
	({ label, error, required, options, onChange, ...props }, ref) => {
		const renderValue = (option: any) => {
			if (!option) {
				return null;
			}

			const foundOption = options?.find((o) => o.value === option.value);

			return (
				<Stack direction="row" alignItems="center" gap={1.5}>
					<ListItemDecorator>
						{foundOption?.icon}
					</ListItemDecorator>

					{option.label}
				</Stack>
			);
		}

		return (
			<Stack gap={0.5}>
				{label && (
					<Label required={required}>
						{label}
					</Label>
				)}

				<MuiSelect
					ref={ref}
					renderValue={renderValue}
					onChange={(_, value) => onChange?.(value)}
					{...props}
				>
					{options?.map((option) => (
						<Option key={option.label} value={option.value}>
							<Stack direction="row" alignItems="center" gap={1}>
								{option.icon && (
									<ListItemDecorator>
										{option.icon}
									</ListItemDecorator>
								)}

								{option.label}
							</Stack>
						</Option>
					))}
				</MuiSelect>

				{error && <ErrorMessage message={error} />}
			</Stack>
		)
	}
);

Select.displayName = "Select";
