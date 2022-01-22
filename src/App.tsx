import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { PATH } from "./constants/route";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={PATH.HOME}>home</Route>
        <Route path={PATH.CARD_REGISTER_COMPLETE}>카드 추가 완료 페이지</Route>
        <Route path={PATH.CARD_LIST}>카드 목록 페이지</Route>
        <Redirect to={PATH.HOME} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
