import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CardRegistrationPage from "../src/pages/CardRegistrationPage";
import RegistedCardListPage from "../src/pages/RegistedCardListPage";
import CardRegistrationCompletedPage from "../src/pages/CardRegistrationCompletedPage";

import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CardRegistrationPage></CardRegistrationPage>,
  },
  {
    path: "registed-card-list",
    element: <RegistedCardListPage />,
  },
  {
    path: "card-registration-completed",
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
