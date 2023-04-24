import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`

${css`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-family: var(--font-sans);
	}

	html,
	body {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	body {
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`}

`;

export default GlobalStyle;
