import { AddCard } from "@/pages/AddCard";
import { CardList } from "@/pages/CardList";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <CardList />,
  },
  {
    path: "/add/card",
    element: <AddCard />,
  },
]);
