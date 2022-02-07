import reactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./src/App";

reactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
