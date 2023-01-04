import React, { createContext, ReactNode, useMemo, useState } from "react";
import { Pages } from "./const";

interface IRouteContext {
  page: string;
  pushRoute: (page: string) => void;
}

export const RouteContext = createContext<IRouteContext>({
  page: "/",
  pushRoute: () => null,
});

interface IProps {
  children: (page: string) => ReactNode;
}

export default function RouteProvider({ children }: IProps) {
  const [page, pushRoute] = useState(Pages.CARD_LIST);

  const routeContext = useMemo(() => ({ page, pushRoute }), [page]);

  return (
    <RouteContext.Provider value={routeContext}>
      {children(page)}
    </RouteContext.Provider>
  );
}
