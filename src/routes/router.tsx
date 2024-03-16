import { CardList } from "@/pages/CardList";
import { CompleteRegister } from "@/pages/CompleteRegister";
import { RegisterCard } from "@/pages/RegisterCard";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <CardList />,
  },
  {
    path: "/register/card",
    element: <RegisterCard />,
  },
  {
    path: "/complete/register",
    element: <CompleteRegister />,
  },
]);
