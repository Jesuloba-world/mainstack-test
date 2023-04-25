import {
	Container,
	Greeting,
	Subtitle,
	Welcome,
	TimeFrames,
	TimeFrame,
} from "./dashboard.style";
import { timeFrames } from "./constants";
import { Views } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/query";

export const DashBoard = () => {
	const { data, isSuccess, isLoading } = useQuery({
		queryKey: ["data"],
		queryFn: getData,
	});

	return (
		<Container>
			<Welcome>
				<Greeting>Good morning, Blessing ⛅️</Greeting>
				<Subtitle>Check out your dashboard summary.</Subtitle>
			</Welcome>
			<TimeFrames>
				{timeFrames.map((frame, index) => {
					return (
						<TimeFrame key={index} active={frame === "All time"}>
							<p>{frame}</p>
						</TimeFrame>
					);
				})}
			</TimeFrames>
			<Views graphData={data?.data.graph_data} />
		</Container>
	);
};
