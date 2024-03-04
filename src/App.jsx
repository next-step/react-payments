import { Route, Routes } from "react-router-dom";
import CardAdd from "./pages/CardAdd.jsx";
import CardList from "./pages/CardList.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardList />}></Route>
      <Route path="/add" element={<CardAdd />}></Route>
    </Routes>
  );
}

export default App;
