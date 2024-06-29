import { useEffect, useState } from "react";
import "./App.css";
import { getData } from "./helpers/getData";
import { Constants } from "./constants";

function App() {
	const [data, setData] = useState();
	const [error, setError] = useState();
	useEffect(() => {
		(async () => {
			const response = await getData();
			if (response?.status === Constants.SUCCESS) {
				setData(response?.payload);
				console.log(response?.payload?.AuthorWorklog);
			} else {
				setError(response?.payload);
			}
		})();
	}, []);

	return (
		<>
			<h2>Dev-Stat</h2>
		</>
	);
}

export default App;
