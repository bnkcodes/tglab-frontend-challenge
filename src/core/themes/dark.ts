import type { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  background: "#0f1112",

  text: {
    primary: "#ffffff",
    secondary: "#bdc0c5",
    muted: "#7d8289",
    invert: "#000000",
  },

  brand: "#25a69c",

  button: {
    primary: {
      bg: "#063330",
      text: "#ffffff",
      hoverBg: "#25a69c",
      hoverText: "#000000",
    },
  },

  colors: {
    success: "#7bdcb5",
    info: "#40a9f3",
    warning: "#ff9f43",
    danger: "#ff6b6b",
    purple: "#b085f5",
    amber: "#fcd34d",
  },
};
