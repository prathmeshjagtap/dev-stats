// @ts-nocheck
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDeveloperDetails } from "../../helpers/getDeveloperDetails";
import { useDataContext } from "../../context/dataContext";
import { SubHeader } from "../../pages/homePage/homePage.style";
import {
	LeaderBoardContainer,
	StyledTable,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "./leaderBoard.style";
import { SecondaryButton } from "../../typography/styles";
import { DeveloperDetailsType, DevelopersDataType } from "../../typings";

export interface SortedDataType {
	SortedData: DevelopersDataType[];
	sortBy: string;
}

const LeaderBoard: FC = () => {
	const developersData = useDataContext();
	const getDevelopersTotalScore =
		developersData && getDeveloperDetails(developersData);
	const [sortedData, setSortedData] = useState<DeveloperDetailsType[]>();
	const [sortCritera, setSortCritera] =
		useState<keyof DeveloperDetailsType>("totalScore");
	const navigate = useNavigate();

	useEffect(() => {
		if (getDevelopersTotalScore) {
			setSortedData(getDevelopersTotalScore);
		}
	}, []);

	useEffect(() => {
		const data = [...sortedData].sort((a, b) => {
			return parseInt(b[sortCritera]) - parseInt(a[sortCritera]);
		});
		setSortedData(data);
	}, [sortCritera]);

	const handleSortChange = (label: string) => {
		setSortCritera(label as keyof DeveloperDetailsType);
	};

	return (
		<LeaderBoardContainer>
			<SubHeader>LeaderBoard</SubHeader>
			<SubHeader>View Sprint Top Performances</SubHeader>
			<StyledTable>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell onClick={() => handleSortChange("totalfOpenPrs")}>
							<SecondaryButton>PR Open</SecondaryButton>
						</TableHeaderCell>
						<TableHeaderCell onClick={() => handleSortChange("totalMergedPrs")}>
							<SecondaryButton>PR Merged</SecondaryButton>
						</TableHeaderCell>
						<TableHeaderCell onClick={() => handleSortChange("totalCommits")}>
							<SecondaryButton>Commits</SecondaryButton>
						</TableHeaderCell>
						<TableHeaderCell
							onClick={() => handleSortChange("totalReviewedPrs")}
						>
							<SecondaryButton>PR Reviewed</SecondaryButton>
						</TableHeaderCell>
						<TableHeaderCell onClick={() => handleSortChange("totalCommnets")}>
							<SecondaryButton>PR Comments</SecondaryButton>
						</TableHeaderCell>
						<TableHeaderCell
							onClick={() => handleSortChange("totalIncidentAlerts")}
						>
							<SecondaryButton>Incident Alerts</SecondaryButton>
						</TableHeaderCell>
						<TableHeaderCell
							onClick={() => handleSortChange("totalIncidentResolved")}
						>
							<SecondaryButton>Incident Resolved</SecondaryButton>
						</TableHeaderCell>
						<TableHeaderCell onClick={() => handleSortChange("totalScore")}>
							<SecondaryButton>Total Score</SecondaryButton>
						</TableHeaderCell>
					</TableRow>
				</TableHead>
				<tbody>
					{sortedData &&
						sortedData?.map((data, key) => {
							return (
								<TableRow key={key}>
									<TableCell
										onClick={() => navigate(`/developerStats/${data?.name}`)}
									>
										<SecondaryButton>{data?.name}</SecondaryButton>
									</TableCell>
									<TableCell>{data?.totalfOpenPrs}</TableCell>
									<TableCell>{data?.totalMergedPrs}</TableCell>
									<TableCell>{data?.totalCommits}</TableCell>
									<TableCell>{data?.totalReviewedPrs}</TableCell>
									<TableCell>{data?.totalCommnets}</TableCell>
									<TableCell>{data?.totalIncidentAlerts}</TableCell>
									<TableCell>{data?.totalIncidentResolved}</TableCell>
									<TableCell>{data?.totalScore}</TableCell>
								</TableRow>
							);
						})}
				</tbody>
			</StyledTable>
		</LeaderBoardContainer>
	);
};

export default LeaderBoard;
