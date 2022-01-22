import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";

import { PATH } from "./constants/route";
import CardRegisterPage from "./pages/CardRegisterPage/CardRegisterPage";

const AppContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 40px;
`;

const App = () => {
  const home = <CardRegisterPage />;
  return (
    <AppContainer style={{ width: "500px" }}>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.HOME} element={home} />
          <Route path={PATH.CARD_REGISTER_COMPLETE} element={<>카드 등록 완료 페이지</>} />
          <Route path={PATH.CARD_LIST} element={<>카드 목록 페이지</>} />
          <Route path="*" element={home} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
