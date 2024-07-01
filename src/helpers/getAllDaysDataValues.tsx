import { DayWiseActivityItemsType, DevelopersDataType } from "../typings";
import { getCurrentUser } from "./getCurrentUser";

const getAllDaysDataValues = (
	user?: string,
	developersData?: DevelopersDataType[]
): DayWiseActivityItemsType[] | undefined => {
	let allDayDataValues = getCurrentUser(user, developersData)
		?.dayWiseActivity?.map((singleDayData) => singleDayData?.items?.children)
		.flat();

	return allDayDataValues;
};

export { getAllDaysDataValues };
