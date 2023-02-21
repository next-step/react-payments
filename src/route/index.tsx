import { Navigate, Route, Routes as ReactRouters } from 'react-router-dom';

import { CardListPage } from '@/pages/CardListPage';
import { CardRegisterConfirmPage } from '@/pages/CardRegisterConfirmPage';
import { CardRegisterPage } from '@/pages/CardRegisterPage';

const Routes = () => {
  return (
    <ReactRouters>
      <Route path="/register" element={<CardRegisterPage />} />
      <Route path="/register-confirm" element={<CardRegisterConfirmPage />} />
      <Route path="/list" element={<CardListPage />} />
      <Route path="*" element={<Navigate replace to="/list" />} />
    </ReactRouters>
  );
};

export default Routes;
