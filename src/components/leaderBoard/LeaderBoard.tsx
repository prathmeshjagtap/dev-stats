import { FC } from "react";
import {
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getDeveloperDetails } from "../../helpers/getDeveloperDetails";
import { useDataContext } from "../../context/dataContext";

const LeaderBoard: FC = () => {
	const navigate = useNavigate();
	const developersData = useDataContext();
	const getDevelopersTotalScore =
		developersData && getDeveloperDetails(developersData);

	return (
		<>
			<TableContainer>
				<Table size="lg" variant="striped" colorScheme="blue">
					<TableCaption placement="top">LeaderBoard</TableCaption>
					<Thead>
						<Tr>
							<Th>Name</Th>
							<Th>PR Open </Th>
							<Th>PR Merged</Th>
							<Th>Commits</Th>
							<Th>PR Reviewed</Th>
							<Th>PR Comments</Th>
							<Th>Incident Alerts</Th>
							<Th>Incident Resolved</Th>
							<Th>Total Score</Th>
						</Tr>
					</Thead>
					<Tbody>
						{getDevelopersTotalScore &&
							getDevelopersTotalScore?.map((data, key) => {
								return (
									<Tr key={key}>
										<Td
											onClick={() => navigate(`/developerStats/${data?.name}`)}
										>
											{data?.name}
										</Td>
										<Td>{data?.totalfOpenPrs}</Td>
										<Td>{data?.totalMergedPrs}</Td>
										<Td>{data?.totalCommits}</Td>
										<Td>{data?.totalReviewedPrs}</Td>
										<Td>{data?.totalCommnets}</Td>
										<Td>{data?.totalIncidentAlerts}</Td>
										<Td>{data?.totalIncidentResolved}</Td>
										<Td isNumeric>{data?.totalScore}</Td>
									</Tr>
								);
							})}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
};

export default LeaderBoard;
