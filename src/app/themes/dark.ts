import type { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  background: {
    base: "#0f1112",
    surface: "#1a1d1f",
    overlay: "#0f111299",
  },

  text: {
    primary: "#ffffff",
    secondary: "#bbd0cf",
    muted: "#7d8289",
    invert: "#000000",
  },

  brand: {
		light: "#7ef1f0",
		main: "#25a69c",
    dark: "#063330",
  },

  button: {
    primary: {
      bg: "#ffffff",
      border: "#ffffff",
      text: "#000000",
      hover: {
        bg: "#25a69c",
        text: "#000000",
				border: "#25a69c",
      },
    },
    secondary: {
      bg: "#2a2d2e",
      border: "#3d4143",
      text: "#ffffff",
      hover: {
        bg: "#35393b",
        text: "#ffffff",
				border: "#35393b",
      },
    },
  },

  feedback: {
    success: "#7bdcb5",
    info: "#40a9f3",
    warning: "#ff9f43",
    danger: "#ff6b6b",
  },

  palette: {
    purple: "#b085f5",
    amber: "#fcd34d",
  },
};
