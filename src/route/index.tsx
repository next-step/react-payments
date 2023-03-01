import { Navigate, Route, Routes as ReactRouters } from 'react-router-dom';

import { CardDetailPage } from '@/pages/CardDetail';
import { CardListPage } from '@/pages/CardList';
import { CardRegisterPage } from '@/pages/CardRegister';
import { CardRegisterConfirmPage } from '@/pages/CardRegisterConfirmPage';

const Routes = () => {
  return (
    <ReactRouters>
      <Route path="/register" element={<CardRegisterPage />} />
      <Route path="/register-confirm" element={<CardRegisterConfirmPage />} />
      <Route path="/list" element={<CardListPage />} />
      <Route path="/detail/:cardId" element={<CardDetailPage />} />
      <Route path="*" element={<Navigate replace to="/list" />} />
    </ReactRouters>
  );
};

export default Routes;
