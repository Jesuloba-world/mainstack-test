import styled from "styled-components";

export const Container = styled.div`
	border: 1px solid #eff1f6;
	border-radius: 12px;
	overflow: hidden;
	padding: 24px 24px 44px 24px;
	display: flex;
	flex-direction: column;
	gap: 42px;
`;

export const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.h4`
	font-size: 18px;
	line-height: 24px;
	letter-spacing: -0.015em;
	color: var(--black);
`;

export const Clickable = styled.p`
	color: var(--primary);
	font-size: 14px;
	line-height: 22px;
`;

export const Main = styled.div`
	display: grid;
	grid-template-columns: 1.2fr 1fr;
`;

export const Items = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;
`;

export const Item = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
`;

export const Color = styled.div<{ color: string }>`
	background-color: ${({ color }) => color};
	height: 12px;
	width: 12px;
	border-radius: 50%;
	margin-left: 4px;
`;
