import { useImperativeHandle, useState } from "react";
import { useMask } from '@react-input/mask';

import type { InputControllerProps } from "./types";

export function useInputController({ ref, mask }: InputControllerProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showHelperText, setShowHelperText] = useState(false);

	const maskedInputRef = useMask({ mask, replacement: { _: /\d/ }});

	useImperativeHandle(ref, () => maskedInputRef.current!, [maskedInputRef]);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowHelperText = () => {
    setShowHelperText((prev) => !prev);
  };

  return {
		maskedInputRef,
    showPassword,
    showHelperText,
    handleClickShowPassword,
    handleClickShowHelperText,
  };
}
