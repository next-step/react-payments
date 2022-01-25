import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCardCompletePage from "./AddCardCompletePage";
import CardListPage from "./CardListPage";
import AddCardPage from "./AddCardPage";
import { RoutePath } from "@common/constants";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={RoutePath.CardList} element={<CardListPage />} />
        <Route path={RoutePath.AddCard} element={<AddCardPage />} />
        <Route
          path={RoutePath.AddCardComplete}
          element={<AddCardCompletePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
