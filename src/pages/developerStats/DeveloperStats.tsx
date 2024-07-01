import { useNavigate, useParams } from "react-router-dom";
import LineGraph from "../../components/lineGraph/LineGraph";
import BarChart from "../../components/barchart/Barchart";
import { Container, Header } from "../homePage/homePage.style";
import { PrimaryButton } from "../../typography/styles";
import { useDataContext } from "../../context/dataContext";
import { getAllDaysDataValues } from "../../helpers/getAllDaysDataValues";
import { getLabelsData } from "../../helpers/getLabelsData";
import { createDataSet } from "../../helpers/createDataSet";
import { dataConstants } from "../../constants/Constants";

export type ChartData = {
	labels: string[];
	datasets: Dataset[];
};

export type Dataset = {
	label: string;
	data: string[];
	borderColor: string;
	backgroundColor: string;
	borderWidth?: number;
};

function DeveloperStats() {
	const { user } = useParams();
	const navigate = useNavigate();
	const developersData = useDataContext();

	const allDaysDataValues = getAllDaysDataValues(user, developersData);

	const labels = getLabelsData(developersData, user);
	const lineChartData = {
		labels: labels,
		datasets: [
			{
				...createDataSet(allDaysDataValues, dataConstants.PR_OPEN),
			},
			{
				...createDataSet(allDaysDataValues, dataConstants.PR_MERGED),
			},
			{
				...createDataSet(allDaysDataValues, dataConstants.COMMITS),
			},
			{
				...createDataSet(allDaysDataValues, dataConstants.PR_REVIEWED),
			},
			{
				...createDataSet(allDaysDataValues, dataConstants.PR_COMMNENTS),
			},
			{
				...createDataSet(allDaysDataValues, dataConstants.INCIDENT_ALERTS),
			},
			{
				...createDataSet(allDaysDataValues, dataConstants.INCIDENTS_RESOLVED),
			},
		],
	};

	const barChartData = {
		labels: labels,
		datasets: [
			{
				...createDataSet(allDaysDataValues, dataConstants.PR_OPEN),
				borderWidth: 1,
			},
			{
				...createDataSet(allDaysDataValues, dataConstants.PR_MERGED),
				borderWidth: 1,
			},
			{
				...createDataSet(allDaysDataValues, dataConstants.COMMITS),
				borderWidth: 1,
			},
			{
				...createDataSet(allDaysDataValues, dataConstants.PR_REVIEWED),
				borderWidth: 1,
			},
			{
				...createDataSet(allDaysDataValues, dataConstants.PR_COMMNENTS),
				borderWidth: 1,
			},
			{
				...createDataSet(allDaysDataValues, dataConstants.INCIDENT_ALERTS),
				borderWidth: 1,
			},
			{
				...createDataSet(allDaysDataValues, dataConstants.INCIDENTS_RESOLVED),
				borderWidth: 1,
			},
		],
	};

	return (
		<Container>
			<Header>{user && user}</Header>
			{lineChartData && <LineGraph data={lineChartData} />}
			{barChartData && <BarChart data={barChartData} />}
			<PrimaryButton onClick={() => navigate("/")}>Back</PrimaryButton>
		</Container>
	);
}

export default DeveloperStats;
