export type VideoProp = {
	id: number;
	name: string;
	duration: string;
	title: string;
};

export const videosData: VideoProp[] = [
	{
		id: 0,
		name: 'big-buck-bunny',
		duration: '<1 min',
		title: 'Big Buck Bunny',
	},
	{
		id: 1,
		name: 'tom-and-jerry',
		duration: '3 mins',
		title: 'Tom & Jerry',
	},
	{
		id: 2,
		name: 'soul',
		duration: '4 mins',
		title: 'Soul',
	},
	{
		id: 3,
		name: 'outside-the-wire',
		duration: '2 mins',
		title: 'Outside the wire',
	},
	{
		id: 4,
		name: 'hampi-restaurant',
		duration: '3 mins',
		title: 'Hampi Restaurant demo',
	},
	{
		id: 5,
		name: 'detect-and-blur-human-faces',
		duration: '1 min',
		title: 'Detect and blur human faces',
	},
	{
		id: 6,
		name: 'bitcoin-meme',
		duration: '<1 min',
		title: 'Bitcoin meme',
	},
];
