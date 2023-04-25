import { Container } from "./line.style";
import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";

interface lineChartProps {
	data: {
		id: string;
		color: string;
		data: {
			x: string;
			y: number;
		}[];
	}[];
}

export const LineChart: React.FC<lineChartProps> = ({ data }) => {
	return (
		<Container>
			<ResponsiveLine
				data={data}
				margin={{ top: 20, right: 20, bottom: 30, left: 35 }}
				xScale={{ type: "point" }}
				yScale={{
					type: "linear",
					min: 0,
					max: "auto",
				}}
				yFormat=" >-.2f"
				axisBottom={{
					tickSize: 0,
					tickPadding: 15,
					tickRotation: 0,
					legend: null,
				}}
				axisLeft={{
					tickSize: 0,
					tickPadding: 15,
					tickRotation: 0,
				}}
				enableGridX={false}
				enablePoints={false}
				enableArea={true}
				useMesh={true}
				colors={{ datum: "color" }}
				defs={[
					linearGradientDef("gradientA", [
						{ offset: 0, color: "inherit" },
						{ offset: 70, color: "inherit", opacity: 0.5 },
						{ offset: 100, color: "inherit", opacity: 0 },
					]),
				]}
				fill={[{ match: "*", id: "gradientA" }]}
				theme={{
					grid: {
						line: {
							strokeDasharray: "5 5",
						},
					},
				}}
			/>
		</Container>
	);
};
