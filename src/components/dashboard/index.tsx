import {
	Container,
	Greeting,
	Subtitle,
	Welcome,
	TimeFrames,
	TimeFrame,
	DataContainer,
} from "./dashboard.style";
import { timeFrames, countries, sources } from "./constants";
import { Views, SourceCard } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/query";

export const DashBoard = () => {
	const { data, isLoading, isSuccess } = useQuery({
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
			{isLoading ? (
				<h1>Loading...</h1>
			) : isSuccess ? (
				<DataContainer>
					<Views graphData={data?.data.graph_data} />
					<SourceCard
						id="Top Locations"
						data={data.data.top_locations.map((el) => ({
							count: el.count,
							percent: el.percent,
							source: el.country,
							image: countries[el.country].image,
							color: countries[el.country].color,
						}))}
					/>
					<SourceCard
						id="Top Referral source"
						data={data.data.top_sources.map((el) => ({
							count: el.count,
							percent: el.percent,
							source: el.source,
							image: sources[el.source].image,
							color: sources[el.source].color,
							name: sources[el.source].name,
						}))}
					/>
				</DataContainer>
			) : (
				<h1>An error occurred</h1>
			)}
		</Container>
	);
};
