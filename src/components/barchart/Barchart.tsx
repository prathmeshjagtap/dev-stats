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
import { BarChartContainer } from "./barChart.style";
import { FC } from "react";
import { ChartData } from "../../pages/developerStats/DeveloperStats";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const BarChart: FC<{ data: any }> = ({ data }) => {
	const options = {};

	return (
		<BarChartContainer>
			<Bar options={options} data={data} />
		</BarChartContainer>
	);
};

export default BarChart;
