import { FC } from "react";
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

const LeaderBoard: FC = () => {
	const navigate = useNavigate();
	const developersData = useDataContext();
	const getDevelopersTotalScore =
		developersData && getDeveloperDetails(developersData);

	return (
		<LeaderBoardContainer>
			<SubHeader>LeaderBoard</SubHeader>
			<SubHeader>View Sprint Top Performances</SubHeader>
			<StyledTable>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>PR Open </TableHeaderCell>
						<TableHeaderCell>PR Merged</TableHeaderCell>
						<TableHeaderCell>Commits</TableHeaderCell>
						<TableHeaderCell>PR Reviewed</TableHeaderCell>
						<TableHeaderCell>PR Comments</TableHeaderCell>
						<TableHeaderCell>Incident Alerts</TableHeaderCell>
						<TableHeaderCell>Incident Resolved</TableHeaderCell>
						<TableHeaderCell>Total Score</TableHeaderCell>
					</TableRow>
				</TableHead>
				<tbody>
					{getDevelopersTotalScore &&
						getDevelopersTotalScore?.map((data, key) => {
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
