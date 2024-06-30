import { useEffect, useState } from "react";
import LeaderBoard from "../components/leaderBoard/LeaderBoard";
import LineGraph from "../components/LineGraph";
import BarChart from "../components/Barchart";
import { DevelopersDataType } from "../typings";
import { apiResponseConstants } from "../constants/Constants";
import { getData } from "../helpers/getData";

function HomePage() {
	const [isLoading, setisLoading] = useState(true);
	const [developersData, setDevelopersData] = useState<DevelopersDataType[]>();
	const [error, setError] = useState();

	useEffect(() => {
		(async () => {
			const response = await getData();
			if (response?.status === apiResponseConstants.SUCCESS) {
				setDevelopersData(response?.payload?.AuthorWorklog.rows);
				setisLoading(false);
			} else {
				setError(response?.payload);
			}
		})();
	}, []);

	if (isLoading) {
		return <>Loading......</>;
	}

	if (error) {
		return <>Soory for the Inconvenience, Currently facing some error</>;
	}

	return (
		<>
			<h2>Dev-Stat Home Page</h2>
			<h1>LeaderBoard</h1>
			<LeaderBoard />
		</>
	);
}

export default HomePage;
