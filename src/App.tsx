import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";

import { PATH } from "./constants/route";
import CardRegisterPage from "./pages/CardRegisterPage/CardRegisterPage";
import PendingCardStore from "./stores/card/pendingCardStore";
import CardRegisterCompletePage from "./pages/CardRegisterCompletePage/CardRegisterCompletePage";

const AppContainer = styled.div`
  width: 380px;
  margin: 0 auto;
  padding: 40px;
`;

const App = () => {
  const home = (
    <PendingCardStore>
      <Outlet />
    </PendingCardStore>
  );
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.HOME} element={home}>
            <Route index element={<CardRegisterPage />} />
            <Route path={PATH.CARD_REGISTER_COMPLETE} element={<CardRegisterCompletePage />} />
          </Route>
          <Route path={PATH.CARD_LIST} element={<>카드 목록 페이지</>} />
          <Route path="*" element={home} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
