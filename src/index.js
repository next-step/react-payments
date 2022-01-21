import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import AddCard from "./pages/addCard";
import CompleteCard from "./pages/completeCard";
import CardList from "./pages/cardList";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddCard />} />
        <Route path="/complete" element={<CompleteCard />} />
        <Route path="/list" element={<CardList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
