import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { AddingCard, ConfirmCard, HoldingCards } from 'pages';
import { Layout } from 'components/common';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HoldingCards />} />
      <Route path="new" element={<AddingCard />} />
      <Route path="confirm" element={<ConfirmCard />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
