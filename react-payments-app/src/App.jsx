import { Route, Routes } from "react-router-dom";
import CardListPage from "../src/pages/CardListPage";
import CardRegistration from "./pages/CardRegistrationPage";
import CardRegistrationCompleted from "./pages/CardRegistrationPage/Completed";

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<CardListPage />} />
        <Route path="/registration" element={<CardRegistration />} />
        <Route
          path="/registration/completed"
          element={<CardRegistrationCompleted />}
        />
      </Routes>
    </div>
  );
}

export default App;
