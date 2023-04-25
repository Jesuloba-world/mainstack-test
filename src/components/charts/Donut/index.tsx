import { Container } from "./donut.style";
import { ResponsivePie } from "@nivo/pie";

interface DonutProps {
	data: {
		id: string | number;
		label: string;
		value: number;
		color: string;
	}[];
}

export const Donut: React.FC<DonutProps> = ({ data }) => {
	return (
		<Container>
			<ResponsivePie
				data={data}
				innerRadius={0.55}
				colors={{ datum: "data.color" }}
				margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
				activeOuterRadiusOffset={4}
				enableArcLabels={false}
				enableArcLinkLabels={false}
			/>
		</Container>
	);
};
