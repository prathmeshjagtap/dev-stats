import { DayWiseActivityItemsType } from "../typings";

const createBarChartDataSet = (
	dataToFilter: DayWiseActivityItemsType[] | undefined,
	label: string
) => {
	const filteredData = dataToFilter?.filter((data) => data.label === label);
	console.log(filteredData);
	return {
		label: filteredData && filteredData[0].label,
		data: filteredData && filteredData.map((values) => values.count),
		backgroundColor: filteredData && filteredData[0].fillColor,
		borderWidth: 1,
	};
};

export { createBarChartDataSet };
