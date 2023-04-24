import styled, { css } from "styled-components";

export const Container = styled.div`
	min-height: 100vh;
	height: 100vh;
	height: 100%;
	position: sticky;
	top: 0;
	width: 304px;

	display: flex;
	gap: 44px;
	flex-direction: column;
	padding: 32px 0;
	border-right: 1px solid var(--light-grey);
`;

export const LogoContainer = styled.div`
	padding: 0 16px 0 60px;
`;

export const NavSections = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

export const NavSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const NavTitle = styled.h4`
	padding: 0 16px 0 60px;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	font-weight: 300;
	color: var(--grey);
`;

export const NavItems = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

export const NavItem = styled.div<{ active: boolean }>`
	padding: 0 16px 0 60px;
	display: flex;
	gap: 12px;
	height: 28px;
	align-items: center;
	position: relative;

	${({ active }) =>
		active
			? css`
					color: var(--primary);

					&::before {
						content: "";
						display: block;
						height: 100%;
						width: 2px;
						background-color: var(--primary);
						position: absolute;
						top: 0;
						left: 0;
					}
			  `
			: css`
					color: var(--grey);
			  `};

	p {
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;
	}
`;

export const UserSection = styled.div`
	padding: 0 16px 0 60px;
	margin-top: auto;
	display: flex;
	gap: 12px;
	align-items: center;

	img {
		border-radius: 50%;
	}

	button {
		background: transparent;
		border: none;
		margin-left: auto;
	}
`;

export const UserName = styled.p`
	font-size: 15px;
	line-height: 16px;
	color: var(--grey);
`;
