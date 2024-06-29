export type DataNameType =
	| "PR Open"
	| "PR Merged"
	| "Commits"
	| "PR Reviewed"
	| "PR Comments"
	| "Incident Alerts"
	| "Incident Resolved";

export interface DayWiseActivityItemsType {
	count: string;
	label: DataNameType;
	fillColor: string;
}

export interface DayWiseActtivityType {
	date: Date;
	items: DayWiseActivityItemsType[];
}

export interface TotalActivityType {
	name: DataNameType;
	value: string;
}

export interface ActiveDaysType {
	days: Number;
	isBurnOut: boolean;
	insight: Array<string>;
}

export interface DevelopersDataType {
	name: string;
	totalActivity: TotalActivityType[];
	dayWiseActivity: DayWiseActtivityType[];
	activeDays: ActiveDaysType;
}

export interface DeveloperDetailsType {
	name: string;
	email: string;
	totalfOpenPrs: string;
	totalMergedPrs: string;
	totalCommits: string;
	totalReviewedPrs: string;
	totalCommnets: string;
	totalIncidentAlerts: string;
	totalIncidentResolved: string;
	totalScore?: string;
}
