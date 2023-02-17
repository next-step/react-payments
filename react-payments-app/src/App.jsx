import { Route, Routes } from "react-router-dom";
import CardListPage from "../src/pages/CardListPage";
import CardNicknamePage from "./pages/CardNicknamePage";
import CardRegistration from "./pages/CardRegistrationPage";

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<CardListPage />} />
        <Route path="/registration" element={<CardRegistration />} />
        <Route
          path="/registration/setCardNickname"
          element={<CardNicknamePage />}
        />
      </Routes>
    </div>
  );
}

export default App;
