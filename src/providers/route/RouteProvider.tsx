import { createContext, ReactNode, useMemo } from "react";
import { useRoute } from "./hooks";

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
  const { page, pushRoute } = useRoute();
  const routeContext = useMemo(() => ({ page, pushRoute }), [page, pushRoute]);

  return (
    <RouteContext.Provider value={routeContext}>
      {children(page)}
    </RouteContext.Provider>
  );
}
