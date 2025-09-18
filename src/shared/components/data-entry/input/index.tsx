import { forwardRef } from "react";
import { TextField, InputAdornment, IconButton, Tooltip } from "@mui/material";
import { VisibilityTwoTone, VisibilityOffTwoTone, InfoOutlined } from "@mui/icons-material";

import { useInputController } from "./controller";
import { type InputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, value, mask, error, helperText, required, type, instructions, ...props }, ref) => {
    const {
      showPassword,
      showInstructions,
      handleClickShowPassword,
      handleClickShowInstructions,
      handleMouseDownPassword,
      applyMask,
    } = useInputController(mask);

    return (
      <TextField
        {...props}
        name={name}
        value={applyMask(value)}
        label={`${label}${required ? " *" : ""}`}
        error={!!error}
        helperText={helperText}
        fullWidth
        variant="outlined"
        type={type === "password" && showPassword ? "text" : type}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                {instructions && (
                  <Tooltip
                    title={instructions}
                    open={showInstructions}
                    onClose={handleClickShowInstructions}
                    arrow
                  >
                    <IconButton
                      aria-label="show instructions"
                      onClick={handleClickShowInstructions}
                      edge="end"
                    >
                      <InfoOutlined />
                    </IconButton>
                  </Tooltip>
                )}

                {type === "password" && (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOffTwoTone />
                    ) : (
                      <VisibilityTwoTone />
                    )}
                  </IconButton>
                )}
              </InputAdornment>
            ),
          },
        }}
        inputRef={ref}
      />
    );
  }
);

Input.displayName = "Input";
