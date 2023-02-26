import { STEP } from "constants/Payments";
import { CardForm, CardList, Completed } from "pages/payments";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: STEP.SHOW_CARD_LIST,
    element: <CardList />,
  },
  {
    path: STEP.REGISTER_CARD,
    element: <CardForm />,
  },
  {
    path: STEP.ADD_CARD_NICKNAME,
    element: <Completed />,
  },
]);

export default router;
