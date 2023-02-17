import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Layout } from 'components';
import { AddingCard, HoldingCards } from 'pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HoldingCards />} />
      <Route path="new" element={<AddingCard />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
