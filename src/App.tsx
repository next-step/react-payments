import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import ModalProvider from "./components/ModalProvider";
import CardProvider from "./components/CardProvider";

function App() {
  return (
    <>
      <ModalProvider>
        <CardProvider>
          <GlobalStyle />
          <Router />
        </CardProvider>
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
