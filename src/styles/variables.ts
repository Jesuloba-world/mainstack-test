import { css } from "styled-components";
import { Sohne } from "./fonts";

export const variables = css`
	:root {
		--font-sans: ${Sohne.style.fontFamily}, "Inter", "San Francisco",
			"SF Pro Text", -apple-system, system-ui, sans-serif;

		--primary: #ff5403;
		--secondary-orange: #ffddcd;
		--grey: #56616b;
		--black: #131316;
		--dark-grey: #31373d;
		--light-grey: #eff1f6;
	}
`;
