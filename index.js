import reactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./src/App";

import AddCardContainer from "./src/components/AddCard/AddCardContainer";

reactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
