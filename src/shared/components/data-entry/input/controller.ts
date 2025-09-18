import { useState, useCallback } from "react";
import { masks, type MaskFunctions } from "@core/utils";

export function useInputController(mask?: keyof MaskFunctions) {
  const [showPassword, setShowPassword] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const applyMask = useCallback(
    (value: string) => {
      if (mask && value) {
        const maskFunction = masks[mask];

        if (!maskFunction) throw new Error("Máscara não definida");

        return maskFunction(value);
      } else {
        if (value === null || typeof value === "undefined") return "";
        return value;
      }
    },
    [mask]
  );

  return {
    showPassword,
    showInstructions,
    handleClickShowPassword,
    handleClickShowInstructions,
    handleMouseDownPassword,
    applyMask,
  };
}
