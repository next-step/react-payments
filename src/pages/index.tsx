import styled from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import AddPage from "./AddPage";
import CompletedPage from "./CompletedPage";
import RegisterPage from "./RegisterPage/index";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <AddPage />
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
