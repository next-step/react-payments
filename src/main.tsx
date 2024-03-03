import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import PageStepProvider from "./Context/PageStepProvider.tsx";
import { CardProvider } from "./Context/CardProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CardProvider>
    <PageStepProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PageStepProvider>
  </CardProvider>
);
