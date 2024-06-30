import { DevelopersDataType } from "../typings";
import { getCurrentUser } from "./getCurrentUser";

const getLabelsData = (
	developersData?: DevelopersDataType[],
	user?: string
) => {
	let Labels = getCurrentUser(user, developersData)?.dayWiseActivity?.map(
		(dayWiseActivity) => dayWiseActivity?.date
	);
	return Labels;
};

export { getLabelsData };
