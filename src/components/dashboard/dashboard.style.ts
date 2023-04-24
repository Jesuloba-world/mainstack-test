import styled, { css } from "styled-components";

export const Container = styled.div`
	padding: 24px 60px 44px 60px;
`;

export const Welcome = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const Greeting = styled.h1`
	font-size: 24px;
	line-height: 32px;
	color: var(--black);
`;

export const Subtitle = styled.p`
	font-size: 14px;
	line-height: 22px;
	color: var(--dark-grey);
`;

export const TimeFrames = styled.div`
	display: flex;
	gap: 12px;
	margin-top: 23px;
	margin-bottom: 24px;
`;

export const TimeFrame = styled.div<{ active?: boolean }>`
	padding: 12px 16px;

	border-radius: 100px;

	${({ active }) =>
		active
			? css`
					border: 1px solid var(--primary);
					color: var(--primary);
					background-color: var(--secondary-orange);
			  `
			: css`
					border: 1px solid var(--light-grey);
					color: var(--dark-grey);
			  `}

	p {
		text-transform: capitalize;
		font-size: 14px;
		line-height: 16px;
	}
`;
