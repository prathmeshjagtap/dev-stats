import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { getLabelsData } from "../helpers/getLabelsData";
import { useDataContext } from "../context/dataContext";
import { useParams } from "react-router-dom";
import { createBarChartDataSet } from "../helpers/createBarChartDataSet";
import { dataConstants } from "../constants/Constants";
import { getAllDaysDataValues } from "../helpers/getAllDaysDataValues";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const BarChart = () => {
	const { user } = useParams();
	const developersData = useDataContext();
	const options = {};

	const labels = getLabelsData(developersData, user);
	const allDaysDataValues = getAllDaysDataValues(user, developersData);
	const data = {
		labels: labels,
		datasets: [
			{
				...createBarChartDataSet(allDaysDataValues, dataConstants.PR_OPEN),
			},
			{
				...createBarChartDataSet(allDaysDataValues, dataConstants.PR_MERGED),
			},
			{
				...createBarChartDataSet(allDaysDataValues, dataConstants.COMMITS),
			},
			{
				...createBarChartDataSet(allDaysDataValues, dataConstants.PR_REVIEWED),
			},
			{
				...createBarChartDataSet(allDaysDataValues, dataConstants.PR_COMMNENTS),
			},
			{
				...createBarChartDataSet(
					allDaysDataValues,
					dataConstants.INCIDENT_ALERTS
				),
			},
			{
				...createBarChartDataSet(
					allDaysDataValues,
					dataConstants.INCIDENTS_RESOLVED
				),
			},
		],
	};

	return (
		<div>
			<Bar options={options} data={data} />
		</div>
	);
};

export default BarChart;
