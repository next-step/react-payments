import CardAddPage from "pages/CardAddPage/CardAddPage";
import CardEditPage from "pages/CardEditPage/CardEditPage";
import CardListPage from "pages/CardListPage/CardListPage";
import CardRegisterPage from "pages/CardRegisterPage/CardRegisterPage";
import CardProvider from "provider/CardProvider";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="root mt-20">
      <BrowserRouter>
        <CardProvider>
          <Routes>
            <Route path="/" element={<CardListPage />} />
            <Route path="/add" element={<CardAddPage />} />
            <Route path="/register" element={<CardRegisterPage />} />
            <Route path="/edit" element={<CardEditPage />} />
          </Routes>
        </CardProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
