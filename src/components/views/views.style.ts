import styled from "styled-components";

export const Container = styled.div`
	border: 1px solid var(--light-grey);
	border-radius: 12px;
	padding: 32px 24px 22px 24px;
	width: 100%;
	grid-column: 1 / -1;
`;

export const Top = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Text = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;

	h3 {
		font-size: 18px;
		line-height: 24px;
		letter-spacing: -0.015em;
		color: var(--black);
	}

	p {
		font-size: 14px;
		line-height: 20px;
		color: var(--dark-grey);
	}
`;

export const Info = styled.div`
	margin-top: 10px;
`;

export const Total = styled.p`
	margin-top: 24px;
	margin-bottom: 32px;
	color: var(--black);
	font-size: 48px;
	line-height: 120%;
	letter-spacing: -0.015em;
	font-weight: 600;
`;
