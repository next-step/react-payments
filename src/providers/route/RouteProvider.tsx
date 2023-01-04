import { createContext, ReactNode, useMemo } from "react";
import { TPages } from "./types";
import { useRoute } from "./hooks";

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
  const { page, pushRoute } = useRoute();
  const routeContext = useMemo(() => ({ page, pushRoute }), [page, pushRoute]);

  return (
    <RouteContext.Provider value={routeContext}>
      {children(page)}
    </RouteContext.Provider>
  );
}
