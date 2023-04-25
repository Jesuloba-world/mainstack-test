import axios from "axios";

interface Data {
	graph_data: {
		views: {
			[key: string]: number;
		};
	};
	top_locations: {
		country: string;
		count: number;
		percent: number;
	}[];
	top_sources: {
		source: string;
		count: number;
		percent: number;
	}[];
}

export const getData = () => {
	return axios.get<Data>("https://fe-task-api.mainstack.io/");
};
