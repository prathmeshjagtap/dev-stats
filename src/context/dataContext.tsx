import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	FC,
} from "react";
import { DevelopersDataType } from "../typings";
import { getData } from "../helpers/getData";
import { apiResponseConstants } from "../constants/Constants";

const dataContext = createContext<DevelopersDataType[] | undefined>([]);

const useDataContext = () => useContext(dataContext);

const DataProvider: FC<{
	children: React.ReactNode;
}> = ({ children }) => {
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

	return (
		<dataContext.Provider value={developersData}>
			{children}
		</dataContext.Provider>
	);
};

export { DataProvider, useDataContext };
