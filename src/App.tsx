import { useEffect, useState } from "react";
import "./App.css";
import { getData } from "./helpers/getData";
import { Constants } from "./constants";
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
import { DevelopersDataType } from "./typings";
import { getDeveloperDetails } from "./helpers/getDeveloperDetails";

function App() {
	const [isLoading, setisLoading] = useState(true);
	const [developersData, setDevelopersData] = useState<DevelopersDataType[]>();
	const [error, setError] = useState();

	useEffect(() => {
		(async () => {
			const response = await getData();
			if (response?.status === Constants.SUCCESS) {
				setDevelopersData(response?.payload?.AuthorWorklog.rows);
				setisLoading(false);
			} else {
				setError(response?.payload);
			}
		})();
	}, []);

	if (isLoading) {
	}

	if (error) {
		return <>Soory for the Inconvenience, Currently facing some error</>;
	}

	const getDevelopersTotalScore =
		developersData && getDeveloperDetails(developersData);

	return (
		<>
			<h2>Dev-Stat</h2>
			<h1>LeaderBoard</h1>
			<TableContainer>
				<Table variant="simple">
					<TableCaption>LeaderBoard</TableCaption>
					<Thead>
						<Tr>
							<Th>Name</Th>
							<Th>Email</Th>
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
										<Td>{data?.name}</Td>
										<Td>{data?.email}</Td>
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
}

export default App;
