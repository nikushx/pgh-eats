
export type Deal = {
	title: string;
	description: string;
	startHour: number;
	startMinute: number;
	endHour: number;
	endMinute: number;
	daysOfWeek: Array<number>;
	// menuItems: Array<{
	// 	name: string;
	// 	price: string;
	// }>;
};

export type Deals = Array<Deal>;

export type Place = {
	name: string;
	deals: Deals;
};

export type Places = Array<Place>;