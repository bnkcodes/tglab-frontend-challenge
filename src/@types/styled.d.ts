import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: {
      base: string;
      surface: string;
      overlay: string;
    };

    text: {
      primary: string;
      secondary: string;
      muted: string;
      invert: string;
    };

    brand: {
      primary: string;
      secondary: string;
    };

    button: {
      primary: {
        text: string;
        bg: string;
				border: string;
        hover: {
          text: string;
          bg: string;
          border: string;
        };
      };

      secondary: {
        text: string;
        bg: string;
        border: string;
        hover: {
          text: string;
          bg: string;
          border: string;
        };
      };
    };

    feedback: {
      success: string;
      info: string;
      warning: string;
      danger: string;
    };

    palette: {
      purple: string;
      amber: string;
    };
  }
}
