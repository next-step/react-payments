import Router from "./Router";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />;
    </>
  );
}

const GlobalStyle = createGlobalStyle`
input {
  font-size: 16px;
}
`;

export default App;
