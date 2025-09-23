import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-Thin.ttf') format('truetype');
		font-weight: 100;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-ThinItalic.ttf') format('truetype');
		font-weight: 100;
		font-style: italic;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-ExtraLight.ttf') format('truetype');
		font-weight: 200;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-ExtraLightItalic.ttf') format('truetype');
		font-weight: 200;
		font-style: italic;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-Light.ttf') format('truetype');
		font-weight: 300;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-LightItalic.ttf') format('truetype');
		font-weight: 300;
		font-style: italic;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-Regular.ttf') format('truetype');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-Italic.ttf') format('truetype');
		font-weight: 400;
		font-style: italic;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-Medium.ttf') format('truetype');
		font-weight: 500;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-MediumItalic.ttf') format('truetype');
		font-weight: 500;
		font-style: italic;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-SemiBold.ttf') format('truetype');
		font-weight: 600;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-SemiBoldItalic.ttf') format('truetype');
		font-weight: 600;
		font-style: italic;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-Bold.ttf') format('truetype');
		font-weight: 700;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-BoldItalic.ttf') format('truetype');
		font-weight: 700;
		font-style: italic;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-ExtraBold.ttf') format('truetype');
		font-weight: 800;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-ExtraBoldItalic.ttf') format('truetype');
		font-weight: 800;
		font-style: italic;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-Black.ttf') format('truetype');
		font-weight: 900;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('/fonts/robert-sans/RobertSans-BlackItalic.ttf') format('truetype');
		font-weight: 900;
		font-style: italic;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

		html,
		body,
		#root {
			width: 100%;
			height: 100%;
		}

	body {
		font-family: 'Robert Sans', Arial, sans-serif;
		font-weight: 400;
    background-color: ${({ theme }) => theme.background.base};
    color: ${({ theme }) => theme.text.primary};
		transition: background-color 0.4s ease, color 0.4s linear;
	}

	a, button {
		color: inherit;
		transition: all 0.4s linear;
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}

	button {
		border: none;
		background: none;
	}
`;
