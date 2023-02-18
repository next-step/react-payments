import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CardList from './CardList';
import CardCreator from './CardCreator';

export const routes = {
  home: '/',
  cardCreator: '/add',
};

function Router() {
  return (
    <Routes>
      <Route path={routes.home} element={<CardList />} />
      <Route path={routes.cardCreator} element={<CardCreator />} />
    </Routes>
  );
}

export default Router;
