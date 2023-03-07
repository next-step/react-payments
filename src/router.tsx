import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { routes } from '@/routes';

import { CardList } from '@/pages/CardList';
import { CardCreator } from '@/pages/CardCreator';

function Router() {
  // TODO: 특정 route에만 Context를 주는 방법은 없을까?
  return (
    <Routes>
      <Route path={routes.home} element={<CardList />} />
      <Route path={routes.cardCreator} element={<CardCreator />} />
    </Routes>
  );
}

export default Router;
