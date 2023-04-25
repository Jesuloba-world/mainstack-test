import { Container, Info, Text, Top, Total } from "./views.style";
import { Info as InfoIcon } from "@/assets/icons";
import { format } from "date-fns";
import { LineChart } from "@/components";
import { useTheme } from "styled-components";

interface viewProps {
	graphData: { views: { [key: string]: number } };
}

export const Views: React.FC<viewProps> = ({ graphData }) => {
	const data = Object.keys(graphData?.views || {}).map((key) => {
		return {
			x: format(new Date(key), "dd MMM"),
			y: graphData.views[key],
		};
	});

	const total = data.map((key) => key.y).reduce((a, b) => a + b, 0);

	const { primary } = useTheme();

	return (
		<Container>
			<Top>
				<Text>
					<h3>Page Views</h3>
					<p>All time</p>
				</Text>
				<Info>
					<InfoIcon />
				</Info>
			</Top>
			<Total>{total}</Total>
			<LineChart data={[{ id: "views", color: primary, data: data }]} />
		</Container>
	);
};
