import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardManageContextProvider } from "./Card/machine/card/CardManageContext";
import { UniqueIdProvider } from "./common/context/UniqueIdProvider";
import navigationPath from "./common/navigation/navigationPath";
import CardFunnel from "./pages/CardFunnel";

function App() {
	return (
		<div id='app'>
			<UniqueIdProvider>
				<BrowserRouter>
					<Routes>
						<Route
							path={navigationPath.ADD_CARD_FUNNEL["CARD_LIST"]}
							element={
								<CardManageContextProvider>
									<CardFunnel />
								</CardManageContextProvider>
							}
						/>
					</Routes>
				</BrowserRouter>
			</UniqueIdProvider>
		</div>
	);
}

export default App;
