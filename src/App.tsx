import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCardPage from "./AddCardPage";
import AfterCardPage from "./AfterCardPage";
import AddCardModal from "./AddCardModal";
import CardListPage from "./CardListPage";
import ComplateCard from "./ComplateCard";
import "../src/styles/index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardListPage />} />
        <Route path="/1" element={<AddCardPage />} />
        <Route path="/2" element={<AfterCardPage />} />
        <Route path="/3" element={<AddCardModal />} />
        <Route path="/5" element={<ComplateCard />} />
      </Routes>
    </Router>
  );
}

export default App;
