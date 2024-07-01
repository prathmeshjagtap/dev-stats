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
import { LineGraphContainer } from "./lineGraph.style";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const LineGraph: FC<{ data: any }> = ({ data }) => {
	const options = {};

	console.log(data);
	return (
		<LineGraphContainer>
			<Line options={options} data={data} />
		</LineGraphContainer>
	);
};

export default LineGraph;
