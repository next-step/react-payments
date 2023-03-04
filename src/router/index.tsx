import CardListPage from "pages/ListPage/CardListPage";
import AddCardPage from "pages/RegistPage/AddCardPage";
import CompleteCard from "pages/complePage/CompleteCard";
import { createBrowserRouter } from "react-router-dom";

export const ROUTE = {
  CARD_LIST: "/",
  REGIST_CARD: "/regist-card",
  COMPLATE_CARD: "/regist-card/:id",
}

const router = createBrowserRouter([
  {
    path: ROUTE.CARD_LIST,
    element: <CardListPage />,
  },
  {
    path: ROUTE.REGIST_CARD,
    element: <AddCardPage />,
  },
  {
    path: ROUTE.COMPLATE_CARD,
    element: <CompleteCard />,
  },
])


export default router;