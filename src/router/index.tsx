import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { AddCard, Cards, CompleteAddCard } from "@/views/cards";

export const domains = {
  CARD_LIST: "/cards",
  CARD_ADD: "/cards/add",
  CARD_COMPLETE: "/cards/complete",
};

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/cards" replace={true} />,
  },
  {
    path: domains.CARD_LIST,
    element: <Cards />,
  },
  {
    path: domains.CARD_ADD,
    element: <AddCard />,
  },
  {
    path: domains.CARD_COMPLETE,
    element: <CompleteAddCard />,
  },
]);

export default router;
