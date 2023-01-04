import { createContext, ReactNode, useMemo, useState } from "react";
import { TPages } from "./types";
import { Pages } from "./const";

interface IRouteContext {
  page: TPages;
  pushRoute: (page: TPages) => void;
}

export const RouteContext = createContext<IRouteContext>({
  page: "/",
  pushRoute: () => null,
});

interface IProps {
  children: (page: TPages) => ReactNode;
}

export default function RouteProvider({ children }: IProps) {
  const [page, pushRoute] = useState<TPages>(Pages.CARD_LIST);

  const routeContext = useMemo(() => ({ page, pushRoute }), [page]);

  return (
    <RouteContext.Provider value={routeContext}>
      {children(page)}
    </RouteContext.Provider>
  );
}
