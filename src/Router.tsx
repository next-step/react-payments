import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardList from "./routes/CardList";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/list">
          <CardList></CardList>
        </Route>
        <Route path="/">
          <CardList></CardList>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
