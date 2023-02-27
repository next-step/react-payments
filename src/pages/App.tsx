import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import FormPage from "./FormPage/FormPage";
import CompletedPage from "./CompletedPage/CompletedPage";
import MyCardListPage from "./MyCardListPage/MyCardListPage";
import { CardContextProvider } from "context/Card/CardContext";
function App() {
  return (
    <Layout>
      <CardContextProvider>
        <GlobalStyle />
        <Routes>
          <Route element={<FormPage />} path="/add"></Route>
          <Route element={<MyCardListPage />} path="/"></Route>
          <Route element={<CompletedPage />} path="/complete"></Route>
        </Routes>
      </CardContextProvider>
    </Layout>
  );
}

const Layout = styled.div`
  background-color: #fff;
  width: 375px;
  min-width: 375px;
  height: 700px;
  position: relative;
  border-radius: 15px;
`;

export default App;
