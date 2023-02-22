import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { AddCard, Cards, CompleteAddCard } from "@/views/cards";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/cards" replace={true} />,
  },
  {
    path: "/cards",
    element: <Cards />,
  },
  {
    path: "/cards/add",
    element: <AddCard />,
  },
  {
    path: "/cards/complete",
    element: <CompleteAddCard />,
  },
]);

export default router;
