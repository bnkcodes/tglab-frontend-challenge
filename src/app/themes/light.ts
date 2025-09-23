import type { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  background: {
    base: "#ffffff",
    surface: "#f9f9f9",
    overlay: "#ffffff10",
  },

  text: {
    primary: "#000000",
    secondary: "#bbd0cf",
    muted: "#d1d5db",
    invert: "#ffffff",
  },

  brand: {
    primary: "#25a69c",
    secondary: "#063330",
  },

  button: {
    primary: {
      text: "#ffffff",
      bg: "#000000",
			border: "#000000",
      hover: {
        text: "#ffffff",
        bg: "#063330",
				border: "#063330",
      },
    },
    secondary: {
			text: "#000000",
      bg: "#d0dfde",
      border: "#d0dfde",
      hover: {
       	bg: "#063330",
				border: "#063330",
        text: "#ffffff",
      },
    },
  },

  feedback: {
    success: "#7bdcb5",
    info: "#0693e3",
    warning: "#ff9f43",
    danger: "#cf2e2e",
  },

  palette: {
    purple: "#9b51e0",
    amber: "#fcb900",
  },
};
