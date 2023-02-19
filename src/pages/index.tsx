import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import AddPage from "./AddCardPage";
import CompletedPage from "./CompletedPage";
import MyCardPage from "./MyCardPage/index";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Routes>
        <Route element={<AddPage />} path="/add"></Route>
        <Route element={<MyCardPage />} path="/"></Route>
        <Route element={<CompletedPage />} path="/complete"></Route>
      </Routes>
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
