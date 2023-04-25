import {
	Container,
	Clickable,
	Title,
	Top,
	Main,
	Item,
	Items,
	Color,
} from "./source.style";
import Image from "next/image";
import { Donut } from "@/components";

interface SourceCardProps {
	id: string;
	data: {
		source: string;
		count: number;
		percent: number;
		image: string;
		color: string;
		name?: string;
	}[];
}

export const SourceCard: React.FC<SourceCardProps> = ({ data, id }) => {
	console.log(data);
	return (
		<Container>
			<Top>
				<Title>{id}</Title>
				<Clickable>View full reports</Clickable>
			</Top>
			<Main>
				<Items>
					{data.map((el, i) => (
						<Item key={i}>
							<Image
								src={el.image}
								alt={el.source}
								width={20}
								height={20}
							/>
							<p>{el.name ? el.name : el.source}</p>
							<span>{el.percent}%</span>
							<Color color={el.color} />
						</Item>
					))}
				</Items>
				<Donut
					data={data.map((el) => ({
						color: el.color,
						id: el.source,
						label: el.source,
						value: el.count,
					}))}
				/>
			</Main>
		</Container>
	);
};
