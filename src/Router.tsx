import { BrowserRouter, Route, Switch } from "react-router-dom";
import List from "@/routes/card/List";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/list">
          <List></List>
        </Route>
        <Route path="/">
          <List></List>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
