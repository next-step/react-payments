import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from '@/routes';
import { CardList, CardCreator } from '@/pages';

import { CardNicknameSetter } from './pages/CardNickname';

function Router() {
  return (
    <Routes>
      <Route path={routes.home} element={<CardList />} />
      <Route path={routes.cardCreator} element={<CardCreator />} />
      <Route path={routes.nickname} element={<CardNicknameSetter />} />
      <Route path={`${routes.nickname}/:cardId`} element={<CardNicknameSetter />} />
    </Routes>
  );
}

export default Router;
