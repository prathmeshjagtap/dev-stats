import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DeveloperStats from "./pages/DeveloperStats";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/developerStats/:user" element={<DeveloperStats />} />
			</Routes>
		</>
	);
}

export default App;
