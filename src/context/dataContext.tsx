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
	const [developersData, setDevelopersData] = useState<DevelopersDataType[]>();

	useEffect(() => {
		(async () => {
			const response = await getData();
			if (response?.status === apiResponseConstants.SUCCESS) {
				setDevelopersData(response?.payload?.AuthorWorklog.rows);
			} else {
				console.log(response?.payload);
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
