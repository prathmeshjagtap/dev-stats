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
import { useParams } from "react-router-dom";
import { dataConstants } from "../constants/Constants";
import { createLineChartDataSet } from "../helpers/createLineChartDataSet";
import { useDataContext } from "../context/dataContext";
import { getLabelsData } from "../helpers/getLabelsData";
import { getAllDaysDataValues } from "../helpers/getAllDaysDataValues";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const LineGraph: FC<{}> = () => {
	const { user } = useParams();
	const developersData = useDataContext();

	const allDaysDataValues = getAllDaysDataValues(user, developersData);
	const options = {};

	const labels = getLabelsData(developersData, user);
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
