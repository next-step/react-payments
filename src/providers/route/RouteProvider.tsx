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

  const syncPage = useCallback(() => {
    const { pathname } = window.location;
    if (isPages(pathname)) {
      setPage(pathname);
    }
  }, []);

  const routeContext = useMemo(() => ({ page, pushRoute }), [page]);

  useEffect(() => {
    syncPage();

    window.addEventListener("popstate", syncPage);

    return () => window.removeEventListener("popstate", syncPage);
  }, []);

  return (
    <RouteContext.Provider value={routeContext}>
      {children(page)}
    </RouteContext.Provider>
  );
}
