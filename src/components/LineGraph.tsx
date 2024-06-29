import { FC } from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { DevelopersDataType } from "../typings";
import { dataConstants } from "../constants/Constants";
import { createLineChartDataSet } from "../helpers/createLineChartDataSet";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const LineGraph: FC<{ developersData: DevelopersDataType[] | undefined }> = ({
	developersData,
}) => {
	const getLabelsData = () => {
		let Labels =
			developersData &&
			developersData[0]?.dayWiseActivity?.map(
				(dayWiseActivity) => dayWiseActivity?.date
			);
		return Labels;
	};

	const getAllDaysDataValues = () => {
		let allDayDataValues =
			developersData &&
			developersData[0]?.dayWiseActivity
				?.map((singleDayData) => singleDayData?.items?.children)
				.flat();

		return allDayDataValues;
	};

	const allDaysDataValues = getAllDaysDataValues();
	const options = {};

	const labels = getLabelsData();
	const data = {
		labels: labels,
		datasets: [
			{
				...createLineChartDataSet(allDaysDataValues, dataConstants.PR_OPEN),
			},
			{
				...createLineChartDataSet(allDaysDataValues, dataConstants.PR_MERGED),
			},
			{
				...createLineChartDataSet(allDaysDataValues, dataConstants.COMMITS),
			},
			{
				...createLineChartDataSet(allDaysDataValues, dataConstants.PR_REVIEWED),
			},
			{
				...createLineChartDataSet(
					allDaysDataValues,
					dataConstants.PR_COMMNENTS
				),
			},
			{
				...createLineChartDataSet(
					allDaysDataValues,
					dataConstants.INCIDENT_ALERTS
				),
			},
			{
				...createLineChartDataSet(
					allDaysDataValues,
					dataConstants.INCIDENTS_RESOLVED
				),
			},
		],
	};

	return (
		<div>
			<Line options={options} data={data} />
		</div>
	);
};

export default LineGraph;
