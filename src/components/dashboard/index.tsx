import {
	Container,
	Greeting,
	Subtitle,
	Welcome,
	TimeFrames,
	TimeFrame,
} from "./dashboard.style";
import { timeFrames } from "./constants";

export const DashBoard = () => {
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
		</Container>
	);
};
