import { useNavigate, useParams } from "react-router-dom";
import LineGraph from "../../components/lineGraph/LineGraph";
import BarChart from "../../components/barchart/Barchart";
import { Container, Header } from "../homePage/homePage.style";
import { PrimaryButton } from "../../typography/styles";

function DeveloperStats() {
	const { user } = useParams();
	const navigate = useNavigate();
	return (
		<Container>
			<Header>{user && user}</Header>
			<LineGraph />
			<BarChart />
			<PrimaryButton onClick={() => navigate("/")}>Back</PrimaryButton>
		</Container>
	);
}

export default DeveloperStats;
