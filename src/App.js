import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {ROUTE_PATH} from "../src/constants/page"
import CardRegistrationPage from "../src/pages/CardRegistrationPage";
import RegistedCardListPage from "../src/pages/RegistedCardListPage";
import CardRegistrationCompletedPage from "../src/pages/CardRegistrationCompletedPage";

import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.CARD_REGISTRATION,
    element: <CardRegistrationPage></CardRegistrationPage>,
  },
  {
    path: ROUTE_PATH.REGISTED_CARD_LIST,
    element: <RegistedCardListPage />,
  },
  {
    path: ROUTE_PATH.CARD_REGISTRATION_COMPLETED,
    element: <CardRegistrationCompletedPage />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
