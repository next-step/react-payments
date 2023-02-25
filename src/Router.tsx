import { BrowserRouter, Route, Switch } from "react-router-dom";
import List from "./routes/card/List";
import Layout from "./components/Layout";
import Add from "./routes/card/Add";
import Complete from "./routes/card/Complete";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/add">
          <Layout>
            <Add></Add>
          </Layout>
        </Route>
        <Route path="/complete">
          <Complete></Complete>
        </Route>
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
