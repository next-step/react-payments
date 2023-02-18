import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import { CardListPage, InputCardNamePage, RegistrationCardPage } from 'pages';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route>
        <Route path="/card-list" element={<CardListPage />} />
        <Route path="/card-name-input" element={<InputCardNamePage />} />
        <Route path="/card-registration" element={<RegistrationCardPage />} />
        <Route path="*" element={<Navigate replace to="/card-list" />} />
      </Route>
    </ReactRouterRoutes>
  );
};

export default Routes;
