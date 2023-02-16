import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Layout, CardList } from 'components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<CardList />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
