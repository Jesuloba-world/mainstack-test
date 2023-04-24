import {
	Container,
	LogoContainer,
	NavSections,
	NavSection,
	NavTitle,
	NavItems,
	NavItem,
	UserSection,
	UserName,
} from "./sidenav.style";
import Logo from "@/assets/mainstack-logo.svg";
import { sidenavElements } from "./constants";
import UserImage from "@/assets/images/user.png";
import Image from "next/image";
import { Ellipses } from "@/assets/icons";

//TODO: make navItem clickable
export const SideNav = () => {
	return (
		<Container>
			<LogoContainer>
				<Logo />
			</LogoContainer>
			<NavSections>
				{sidenavElements.map((el) => (
					<NavSection key={el.key}>
						{el.title !== "" && <NavTitle>{el.title}</NavTitle>}
						<NavItems>
							{el.elements.map((item) => (
								<NavItem key={item.key} active={item.key === 1}>
									<item.Icon />
									<p>{item.name}</p>
								</NavItem>
							))}
						</NavItems>
					</NavSection>
				))}
			</NavSections>
			<UserSection>
				<Image src={UserImage} alt="user" width={32} height={32} />
				<UserName>Blessing Daniels</UserName>
				<button>
					<Ellipses />
				</button>
			</UserSection>
		</Container>
	);
};
