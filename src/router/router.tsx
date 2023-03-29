import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { CardList, CardCreator, CardNicknameSetter } from '@/pages';

import { routes } from './routes';

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

export { Router };
