import { useState, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CardContext } from "./context/CardContext";

import { ROUTE_PATH } from "./constants/page";
import CardRegistrationPage from "./pages/CardRegistrationPage";
import RegistedCardListPage from "./pages/RegistedCardListPage";
import CardRegistrationCompletedPage from "./pages/CardRegistrationCompletedPage";

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
  const [cardInfo, setCardInfo] = useState({
    cardNumber: {
      num0: "",
      num1: "",
      num2: "",
      num3: "",
    },
    cardExpiration: { month: "", year: "" },
    cardOwnerName: "",
    cardSecurityCode: "",
    cardPassword: { num0: "", num1: "", num2: "", num3: "" },
    cardNickName: "",
    cardCompanyName: "",
    cardColor: "",
  });

  return (
    <CardContext.Provider value={{ cardInfo, setCardInfo }}>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </CardContext.Provider>
  );
}

export default App;
