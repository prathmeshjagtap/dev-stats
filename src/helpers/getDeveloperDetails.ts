import { DeveloperDetailsType, DevelopersDataType } from "../typings";
import { getTotalScore } from "./getTotalScore";

const getDeveloperDetails = (
	developersData: DevelopersDataType[]
): DeveloperDetailsType[] => {
	const DevelopersDataTotal: DeveloperDetailsType[] = developersData?.map(
		(data) => {
			let name = data.name.split("@");

			// This logic can be improved, keeping it simpel due to time constraint
			return {
				name: name[0],
				email: data?.name,
				totalfOpenPrs: data?.totalActivity[0].value,
				totalMergedPrs: data?.totalActivity[1].value,
				totalCommits: data?.totalActivity[2].value,
				totalReviewedPrs: data?.totalActivity[3].value,
				totalCommnets: data?.totalActivity[4].value,
				totalIncidentAlerts: data?.totalActivity[5].value,
				totalIncidentResolved: data?.totalActivity[6].value,
				totalScore: getTotalScore(data?.totalActivity).toString(),
			};
		}
	);

	return DevelopersDataTotal;
};

export { getDeveloperDetails };
