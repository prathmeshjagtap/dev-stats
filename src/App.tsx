import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import DeveloperStats from "./pages/developerStats/DeveloperStats";
import { AppContainer, MainContainer } from "./App.style";

function App() {
	return (
		<>
			<MainContainer>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/developerStats/:user" element={<DeveloperStats />} />
				</Routes>
			</MainContainer>
		</>
	);
}

export default App;
