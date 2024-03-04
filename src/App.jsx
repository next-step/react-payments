import { Route, Routes } from "react-router-dom";
import CardAdd from "./pages/CardAdd.jsx";
import CardList from "./pages/CardList.jsx";
import CardComplete from "./pages/CardComplete.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardList />}></Route>
      <Route path="/add" element={<CardAdd />}></Route>
      <Route path="/complete" element={<CardComplete />}></Route>
    </Routes>
  );
}

export default App;
