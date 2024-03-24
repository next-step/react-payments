import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import PageStepProvider from "./Context/PageStepProvider.tsx";
import { CardProvider } from "./Context/CardProvider.tsx";
import { RegisteredCardsProvider } from "./Context/RegisteredCardsProvider.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RegisteredCardsProvider>
    <CardProvider>
      <PageStepProvider>
        <App />
      </PageStepProvider>
    </CardProvider>
  </RegisteredCardsProvider>
);
