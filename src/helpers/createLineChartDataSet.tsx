import { DayWiseActivityItemsType } from "../typings";

const createLineChartDataSet = (
	dataToFilter: DayWiseActivityItemsType[] | undefined,
	label: string
) => {
	const filteredData = dataToFilter?.filter((data) => data.label === label);
	return {
		label: filteredData && filteredData[0].label,
		data: filteredData && filteredData.map((values) => values.count),
		borderColor: filteredData && filteredData[0].fillColor,
	};
};

export { createLineChartDataSet };
