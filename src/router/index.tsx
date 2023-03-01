import CardListPage from "pages/ListPage/CardListPage";
import AddCardPage from "pages/RegistPage/AddCardPage";
import ComplateCard from "pages/complePage/ComplateCard";
import AfterCardPage from "pages/confirmPage/AfterCardPage";
import { createBrowserRouter } from "react-router-dom";

export const uris = {
  CARD_LIST: "/",
  REGIST_CARD: "/regist-card",
  AFTER_CARD: "/card-add",
  COMPLATE_CARD: "/complete-add-card",
}

const router = createBrowserRouter([
  {
    path: uris.CARD_LIST,
    element: <CardListPage />,
  },
  {
    path: uris.REGIST_CARD,
    element: <AddCardPage />,
  },
  {
    path: uris.AFTER_CARD,
    element: <AfterCardPage />,
  },
  {
    path: uris.COMPLATE_CARD,
    element: <ComplateCard />,
  },
])


export default router;