import React from "react";
import CardAddPage from "./pages/CardAddPage";
import CardListPage from "./pages/CardListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardListPage />} />
        <Route path="/card-add" element={<CardAddPage />} />
      </Routes>
    </Router>
  );
};

export default App;
