import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	position: relative;
`;

export const Main = styled.div`
	flex: 1;
`;

export const Header = styled.div`
	height: 68px;
	padding: 0 60px;
	display: flex;
	align-items: center;

	h2 {
		font-size: 20px;
		line-height: 24px;
		letter-spacing: -0.015em;
		color: var(--black);
	}
`;
