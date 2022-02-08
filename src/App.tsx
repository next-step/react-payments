import { useEffect } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";

import { PATH } from "./constants/route";
import CardRegisterPage from "./pages/CardRegisterPage/CardRegisterPage";
import PendingCardStore from "./stores/card/pendingCardStore";
import CardRegisterCompletePage from "./pages/CardRegisterCompletePage/CardRegisterCompletePage";
import CardListStore from "./stores/cardList/cardListStore";
import CardListPage from "./pages/CardListPage/CardListPage";
import CardNameUpdatePage from "./pages/CardNameUpdatePage/CardNameUpdatePage";
import useCardListDispatch from "./stores/cardList/hooks/useCardListDispatch";
import cardListActions from "./stores/cardList/cardListActions";

const AppContainer = styled.div`
  width: 380px;
  margin: 0 auto;
  padding: 40px;
`;

const CardListInitializer = () => {
  const cardListDispatch = useCardListDispatch();

  useEffect(() => {
    cardListDispatch(cardListActions.getCardList());
  }, []);

  return <></>;
};

const App = () => {
  const home = (
    <CardListStore>
      <CardListInitializer />
      <Outlet />
    </CardListStore>
  );

  const cardRegisterRoutes = (
    <PendingCardStore>
      <Outlet />
    </PendingCardStore>
  );

  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.HOME} element={home}>
            <Route index element={<CardListPage />} />
            <Route path={PATH.CARD_REGISTER} element={cardRegisterRoutes}>
              <Route index element={<CardRegisterPage />} />
              <Route path={PATH.CARD_REGISTER_COMPLETE} element={<CardRegisterCompletePage />} />
            </Route>
            <Route path={PATH.CARD_NAME_UPDATE_BASE} element={<CardNameUpdatePage />} />
          </Route>
          <Route path="*" element={home} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
