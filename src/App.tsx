import { Route, Routes } from "react-router-dom";
import AddCardPage from "./pages/RegistPage/AddCardPage";
import AfterCardPage from "./AfterCardPage";
import AddCardModal from "./AddCardModal";
import CardListPage from "./pages/ListPage/CardListPage";
import ComplateCard from "./ComplateCard";
import "../src/styles/index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardListPage />} />
      <Route path="/1" element={<AddCardPage />} />
      <Route path="/card-add" element={<AfterCardPage />} />
      <Route path="/3" element={<AddCardModal />} />
      <Route path="/5" element={<ComplateCard />} />
    </Routes>
  );
}

export default App;
