import { useEffect, useState } from "react";
import "./App.css";
import { getData } from "./helpers/getData";
import { DevelopersDataType } from "./typings";
import LeaderBoard from "./components/leaderBoard/LeaderBoard";
import LineGraph from "./components/LineGraph";
import BarChart from "./components/Barchart";
import { apiResponseConstants } from "./constants/Constants";

function App() {
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
	}

	if (error) {
		return <>Soory for the Inconvenience, Currently facing some error</>;
	}

	return (
		<>
			<h2>Dev-Stat</h2>
			<h1>LeaderBoard</h1>
			<LeaderBoard developersData={developersData} />
			<LineGraph developersData={developersData} />
			<BarChart />
		</>
	);
}

export default App;
