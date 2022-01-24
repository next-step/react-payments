import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import CreditCards from "./pages/credit-card/List";
import NewCreditCard from "./pages/credit-card/New";
import RegisteredCreditCard from "./pages/credit-card/Registered";

import "./index.css";

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="credit-card">
            <Route index element={<CreditCards />} />
            <Route path="new" element={<NewCreditCard />} />
            <Route path="registered" element={<RegisteredCreditCard />} />
          </Route>
          <Route path="*" element={<Navigate to="credit-card" />}></Route>
        </Routes>
      </Router>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById("root")
);
