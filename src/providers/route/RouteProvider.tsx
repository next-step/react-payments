import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { isPages, TPages } from "./types";
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
  const [page, setPage] = useState<TPages>(Pages.CARD_LIST);

  const pushRoute = useCallback((page: TPages) => {
    setPage(page);
    history.pushState(null, "", page);
  }, []);

  const routeContext = useMemo(() => ({ page, pushRoute }), [page]);

  useEffect(() => {
    const { pathname } = window.location;
    if (isPages(pathname)) {
      setPage(pathname);
    }
  }, []);

  return (
    <RouteContext.Provider value={routeContext}>
      {children(page)}
    </RouteContext.Provider>
  );
}
