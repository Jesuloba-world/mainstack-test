import { Container } from "./layout.style";
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
				<div>{children}</div>
			</Container>
		</>
	);
};
