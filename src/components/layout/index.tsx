import { Container, Main, Header } from "./layout.style";
import Head from "next/head";
import { SideNav } from "@/components";

interface layoutProps {
	children: React.ReactNode;
}

export const Layout: React.FC<layoutProps> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			<Container>
				<SideNav />
				<Main>
					<Header>
						<h2>Dashboard</h2>
					</Header>
					{children}
				</Main>
			</Container>
		</>
	);
};
