import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { AddingCard, ConfirmCard, HoldingCards } from 'pages';
import Layout from './Layout';

import { PATHS } from 'constants/router';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATHS.HOME} element={<Layout />}>
      <Route index element={<HoldingCards />} />
      <Route path={PATHS.NEW} element={<AddingCard />} />
      <Route path={PATHS.CONFIRM} element={<ConfirmCard />} />
    </Route>
  )
);

export default router;
