import axios from "axios";
import { Constants } from "../constants";

const getData = async () => {
	try {
		const response = await axios.get(
			"https://dev-stats-api.vercel.app/dev-stats-sample-data.json"
		);
		if (response.status === 200) {
			return {
				status: Constants.SUCCESS,
				payload: response.data.data,
			};
		}
	} catch (error) {
		return {
			status: Constants.FAILED,
			payload: error,
		};
	}
};

export { getData };
