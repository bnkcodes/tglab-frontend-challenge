import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    text: {
      primary: string;
      secondary: string;
      muted: string;
      invert: string;
    };
    brand: string;
    button: {
      primary: {
        bg: string;
        text: string;
        hoverBg: string;
        hoverText: string;
      };
    };
    colors: {
      success: string;
      info: string;
      warning: string;
      danger: string;
      purple: string;
      amber: string;
    };
  }
}
