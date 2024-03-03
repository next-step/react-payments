import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import PageStepProvider from "./Context/PageStepProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PageStepProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PageStepProvider>
);
