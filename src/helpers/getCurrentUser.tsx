import { DevelopersDataType } from "../typings";
import { getUserNameFromEmail } from "./getUserNameFromEmail";

const getCurrentUser = (
	user?: string,
	developersData?: DevelopersDataType[]
): DevelopersDataType | undefined => {
	let currentUser =
		developersData &&
		developersData.filter((data) => getUserNameFromEmail(data?.name) === user);

	if (currentUser) {
		return currentUser[0] as DevelopersDataType;
	}
};

export { getCurrentUser };
