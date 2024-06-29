export type DataNameType =
	| "PR Open"
	| "PR Merged"
	| "Commits"
	| "PR Reviewed"
	| "PR Comments"
	| "Incident Alerts"
	| "Incident Resolved";

export interface TotalActivityType {
	name: DataNameType;
	value: String;
}

export interface DayWiseActivityItemsType {
	count: String;
	label: DataNameType;
	fillColor: String;
}

export interface DayWiseActtivityType {
	date: Date;
	items: [];
}

export interface ActiveDaysType {
	days: Number;
	isBurnOut: boolean;
	insight: Array<String>;
}

export interface DevelopersDataType {
	name: string;
	totalActivity: TotalActivityType[];
	dayWiseActivity: DayWiseActtivityType[];
	activeDays: ActiveDaysType;
}

export interface DeveloperDetailsType {
	displayName: string;
	displayEmail: string;
	numberofOpenPrs: string;
	numberofCommits: string;
	numberofReviewedPrs: string;
	numberofCommnets: string;
	numberofIncidentAlerts: string;
	numberofIncidentResolved: string;
}
