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
import { background } from "@chakra-ui/react";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const BarChart = () => {
	const options = {};

	const labels = ["R", "G", "U", "E", "T"];
	const data = {
		labels: labels,
		datasets: [
			{
				label: "My First Dataset",
				data: [65, 59, 80, 81, 56],
				borderColor: "rgb(75, 192, 192)",
				background: "yellow",
				borderWidth: 1,
			},
			{
				label: "My Second Dataset",
				data: [61, 59, 50, 71, 26],
				borderColor: "red",
				background: "pink",
				borderWidth: 1,
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
