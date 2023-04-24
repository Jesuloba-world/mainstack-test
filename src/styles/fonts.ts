import localFont from "next/font/local";

export const Sohne = localFont({
	src: [
		{
			path: "../fonts/Sohne-Medium.otf",
			style: "normal",
			weight: "500",
		},
		{
			path: "../fonts/Sohne-Light.otf",
			style: "normal",
			weight: "300",
		},
		{
			path: "../fonts/Sohne-Regular.otf",
			style: "normal",
			weight: "400",
		},
		{
			path: "../fonts/Sohne-SemiBold.otf",
			style: "normal",
			weight: "600",
		},
	],
});
