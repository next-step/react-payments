import styled from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import AddPage from "./AddPage";
import MainPage from "./MainPage";
import CompletedPage from "./CompletedPage";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <MainPage />
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
