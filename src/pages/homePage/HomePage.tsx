import { useEffect, useState } from "react";
import LeaderBoard from "../../components/leaderBoard/LeaderBoard";
import { DevelopersDataType } from "../../typings";
import { apiResponseConstants } from "../../constants/Constants";
import { getData } from "../../helpers/getData";
import { Container, Header } from "./homePage.style";

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
		<Container>
			<Header>Developers Stats</Header>
			<LeaderBoard />
		</Container>
	);
}

export default HomePage;
