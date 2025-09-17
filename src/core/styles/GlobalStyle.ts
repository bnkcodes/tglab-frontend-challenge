import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-Thin.ttf') format('truetype');
		font-weight: 100;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-ThinItalic.ttf') format('truetype');
		font-weight: 100;
		font-style: italic;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-ExtraLight.ttf') format('truetype');
		font-weight: 200;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-ExtraLightItalic.ttf') format('truetype');
		font-weight: 200;
		font-style: italic;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-Light.ttf') format('truetype');
		font-weight: 300;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-LightItalic.ttf') format('truetype');
		font-weight: 300;
		font-style: italic;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-Regular.ttf') format('truetype');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-Italic.ttf') format('truetype');
		font-weight: 400;
		font-style: italic;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-Medium.ttf') format('truetype');
		font-weight: 500;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-MediumItalic.ttf') format('truetype');
		font-weight: 500;
		font-style: italic;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-SemiBold.ttf') format('truetype');
		font-weight: 600;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-SemiBoldItalic.ttf') format('truetype');
		font-weight: 600;
		font-style: italic;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-Bold.ttf') format('truetype');
		font-weight: 700;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-BoldItalic.ttf') format('truetype');
		font-weight: 700;
		font-style: italic;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-ExtraBold.ttf') format('truetype');
		font-weight: 800;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-ExtraBoldItalic.ttf') format('truetype');
		font-weight: 800;
		font-style: italic;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-Black.ttf') format('truetype');
		font-weight: 900;
		font-style: normal;
	}

	@font-face {
		font-family: 'Robert Sans';
		src: url('./src/assets/fonts/robert-sans/RobertSans-BlackItalic.ttf') format('truetype');
		font-weight: 900;
		font-style: italic;
	}

	* {
		margin: 0;
		padding: 0;
	}

	body {
		font-family: 'Robert Sans', Arial, sans-serif;
		font-weight: 400;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text.primary};
	}

	a, button {
		cursor: pointer;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;
