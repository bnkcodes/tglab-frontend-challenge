import { extendTheme } from '@mui/joy/styles';

export const joyTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#25a69c',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        text: {
          primary: '#000000',
          secondary: '#bbd0cf',
          tertiary: '#d1d5db',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#25a69c',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        text: {
          primary: '#ffffff',
          secondary: '#bbd0cf',
          tertiary: '#7d8289',
        },
      },
    },
  },
  fontFamily: {
    body: "'Robert Sans', Arial, sans-serif",
    display: "'Robert Sans', Arial, sans-serif",
  },
  components: {
    JoyInput: {
      styleOverrides: {
        root: {
          '--Input-focusedThickness': '1px',
          '--Input-focusedHighlight': '#25a69c',
          borderRadius: '0.5rem',
          fontFamily: "'Robert Sans', Arial, sans-serif",
        },
      },
    },
    JoyButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
          fontWeight: 500,
          fontFamily: "'Robert Sans', Arial, sans-serif",
        },
      },
    },
    JoyIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.375rem',
          fontFamily: "'Robert Sans', Arial, sans-serif",
        },
      },
    },
		JoyCard:{
			styleOverrides: {
				root: {
					width: '100%',
				},
			},
		},
	},
});
