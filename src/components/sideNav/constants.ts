import {
	AddPhoto,
	Alarm,
	Dashboard,
	Delete,
	Edit,
	FilePresent,
	Group,
	HourGlass,
	Subscription,
} from "@/assets/icons";

export const sidenavElements = [
	{
		key: 1,
		title: "",
		elements: [
			{
				key: 1,
				name: "Dashboard",
				Icon: Dashboard,
			},
			{
				key: 2,
				name: "Item 1",
				Icon: Edit,
			},
			{
				key: 3,
				name: "Item 2",
				Icon: Group,
			},
			{
				key: 4,
				name: "Item 3",
				Icon: HourGlass,
			},
		],
	},
	{
		key: 2,
		title: "Others 1",
		elements: [
			{
				key: 5,
				name: "Item 4",
				Icon: AddPhoto,
			},
			{
				key: 6,
				name: "Item 5",
				Icon: Delete,
			},
		],
	},
	{
		key: 3,
		title: "Other 2",
		elements: [
			{
				key: 7,
				name: "Item 6",
				Icon: Subscription,
			},
			{
				key: 8,
				name: "Item 7",
				Icon: FilePresent,
			},
			{
				key: 9,
				name: "Item 8",
				Icon: Alarm,
			},
		],
	},
];
