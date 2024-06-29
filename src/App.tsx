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
	Tfoot,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { DeveloperDetailsType, DevelopersDataType } from "./typings";

function App() {
	const [isLoading, setisLoading] = useState(true);
	const [developersData, setDevelopersData] = useState<DevelopersDataType>();
	const [developerDetails, setDeveloperDetails] =
		useState<DeveloperDetailsType[]>();
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
		return <>LOADING</>;
	}

	return (
		<>
			<h2>Dev-Stat</h2>
			<h1>LeaderBoard</h1>
			<TableContainer>
				<Table variant="simple">
					<TableCaption>LeaderBoard</TableCaption>
					<Thead>
						<Tr>
							<Th>Email</Th>
							<Th isNumeric>PR Open </Th>
							<Th isNumeric>PR Merged</Th>
							<Th isNumeric>Commits</Th>
							<Th isNumeric>PR Reviewed</Th>
							<Th isNumeric>PR Comments</Th>
							<Th isNumeric>Incident Alerts</Th>
							<Th isNumeric>Incident Resolved</Th>
						</Tr>
					</Thead>
					<Tbody>
						{developersData &&
							developersData?.map((data) => {
								return (
									<Tr>
										<Td>{data?.name}</Td>
										{data?.totalActivity.map((totalActivityData) => {
											return <Td>{totalActivityData?.value}</Td>;
										})}
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
