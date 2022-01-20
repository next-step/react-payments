import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCard from "./pages/AddCard";
import "./index.css";

ReactDOM.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AddCard />} />
        <Route path="/add-card" />
      </Routes>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
