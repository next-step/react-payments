import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import ModalProvider from "./components/ModalProvider";
import CardProvider from "./components/CardProvider";
import CardsProvider from "./components/CardsProvider";

function App() {
  return (
    <>
      <ModalProvider>
        <CardsProvider>
          <CardProvider>
            <GlobalStyle />
            <Router />
          </CardProvider>
        </CardsProvider>
      </ModalProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
input {
  font-size: 16px;
}
`;

export default App;
