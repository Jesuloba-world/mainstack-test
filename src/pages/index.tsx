import Head from "next/head";
import styled, { css } from "styled-components";

const Container = styled.div`
	h1 {
		color: green;
	}
`;

export default function Home() {
	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			<Container>
				<h1>This is an Heading</h1>
			</Container>
		</>
	);
}
