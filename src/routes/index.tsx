import AliasPage from 'pages/AliasPage/AliasPage';
import FormPage from 'pages/FormPage/FormPage';
import MyCardListPage from 'pages/MyCardListPage/MyCardListPage';
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';

const ROUTE_PATH = {
  Alias: '/alias',
  form: '/form',
  main: '/',
} as const;

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path={ROUTE_PATH.main} element={<MyCardListPage />} />
      <Route path={ROUTE_PATH.form} element={<FormPage />}></Route>
      <Route path={ROUTE_PATH.Alias} element={<AliasPage />}></Route>
    </ReactRouterRoutes>
  );
};
export default Routes;
