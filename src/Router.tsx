import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import List from "./routes/card/List";
import Layout from "./components/Layout";
import Add from "./routes/card/Add";
import Complete from "./routes/card/Complete";
import { ROUTE } from "./constants/route";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTE.HOME} exact>
          <Redirect to={ROUTE.ADD} />
        </Route>
        <Route path={ROUTE.ADD}>
          <Layout>
            <Add></Add>
          </Layout>
        </Route>
        <Route path={ROUTE.COMPLETE_ID}>
          <Layout>
            <Complete></Complete>
          </Layout>
        </Route>
        <Route path={ROUTE.COMPLETE}>
          <Layout>
            <Complete></Complete>
          </Layout>
        </Route>
        <Route path={ROUTE.LIST}>
          <Layout>
            <List></List>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
