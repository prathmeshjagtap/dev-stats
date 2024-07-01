import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { DataProvider } from "./context/dataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<DataProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</DataProvider>
	</React.StrictMode>
);
