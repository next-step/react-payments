import React from "react";
import CardAddPage from "./pages/CardAddPage";
import CardListPage from "./pages/CardListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CardProvider } from "./contexts/card";

const App = () => {
  return (
    <Router>
      <CardProvider>
        <Routes>
          <Route path="/" element={<CardListPage />} />
          <Route path="/card-add" element={<CardAddPage />} />
        </Routes>
      </CardProvider>
    </Router>
  );
};

export default App;
