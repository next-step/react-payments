import { BrowserRouter, Route, Routes } from "react-router-dom";
import navigationPath from "./common/navigation/navigationPath";
import CardFunnel from "./pages/CardFunnel";

function App() {
	return (
		<div id='app'>
			<BrowserRouter>
				<Routes>
					<Route
						path={navigationPath.ADD_CARD_FUNNEL["CARD_LIST"]}
						element={<CardFunnel />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
