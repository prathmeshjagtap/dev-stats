import axios from "axios";
import { apiResponseConstants } from "../constants/Constants";

const getData = async () => {
	try {
		const response = await axios.get(
			"https://dev-stats-api.vercel.app/dev-stats-sample-data.json"
		);
		if (response.status === 200) {
			return {
				status: apiResponseConstants.SUCCESS,
				payload: response.data.data,
			};
		}
	} catch (error) {
		return {
			status: apiResponseConstants.FAILED,
			payload: error,
		};
	}
};

export { getData };
