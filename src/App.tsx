import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Layout } from 'components';

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Layout />}></Route>));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
