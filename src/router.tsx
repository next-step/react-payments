import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from '@/routes';

import { CardList } from '@/pages/CardList';
import { CardCreator } from '@/pages/CardCreator';
import { CardNickname } from './pages/CardNickname';

function Router() {
  // TODO: 특정 route에만 Context를 주는 방법은 없을까? -> home에선 context가 필요없음.
  return (
    <Routes>
      <Route path={routes.home} element={<CardList />} />
      <Route path={routes.cardCreator} element={<CardCreator />} />
      <Route path={routes.cardNickname} element={<CardNickname />} />
    </Routes>
  );
}

export default Router;
