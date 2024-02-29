import { Route, Routes } from "react-router-dom";
import CardAdd from "./pages/CardAdd.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardAdd />}></Route>
    </Routes>
  );
}

export default App;
