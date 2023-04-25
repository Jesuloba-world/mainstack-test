import { facebook, instagram, linkedin, google } from "@/assets/images/social";

export const timeFrames = [
	"1 day",
	"3 days",
	"7 days",
	"30 days",
	"All time",
	"Custom date",
];

type sourcesType = {
	[key: string]: {
		image: string;
		color: string;
		name?: string;
	};
};

export const countries: sourcesType = {
	Nigeria: {
		image: `https://flagsapi.com/NG/flat/24.png`,
		color: "#599EEA",
	},
	Germany: { image: `https://flagsapi.com/DE/flat/24.png`, color: "#844FF6" },
	Ghana: { image: `https://flagsapi.com/GH/flat/24.png`, color: "#0FB77A" },
	Finland: { image: `https://flagsapi.com/FI/flat/24.png`, color: "#FAB70A" },
	"United Kingdom": {
		image: `https://flagsapi.com/GB/flat/24.png`,
		color: "#F09468",
	},
};

export const sources: sourcesType = {
	google: {
		name: "Google",
		image: google.src,
		color: "#599EEA",
	},
	instagram: {
		name: "Instagram",
		image: instagram.src,
		color: "#844FF6",
	},
	facebook: {
		name: "Facebook",
		image: facebook.src,
		color: "#0FB77A",
	},
	linkedin: {
		name: "LinkedIn",
		image: linkedin.src,
		color: "#FAB70A",
	},
	other: {
		name: "Other",
		image: "",
		color: "#F09468",
	},
};
