import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import styled from "@emotion/styled";

import { PATH } from "./constants/route";
import CardRegisterPage from "./pages/CardRegisterPage/CardRegisterPage";

const AppContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 40px;
`;

const App = () => {
  return (
    <AppContainer style={{ width: "500px" }}>
      <BrowserRouter>
        <Switch>
          <Route path={PATH.HOME}>
            <CardRegisterPage />
          </Route>
          <Route path={PATH.CARD_REGISTER_COMPLETE}>카드 추가 완료 페이지</Route>
          <Route path={PATH.CARD_LIST}>카드 목록 페이지</Route>
          <Redirect to={PATH.HOME} />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
