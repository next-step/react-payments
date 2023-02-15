import { BrowserRouter, Route, Switch } from "react-router-dom";
import List from "./routes/card/List";
import Layout from "./components/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/add">
          <Layout>
            <List></List>
          </Layout>
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
