import React, { createContext, PropsWithChildren, useMemo } from "react";

interface IRouteContext {
  page: string;
  setPage: (page: string) => void;
}

export const RouteContext = createContext<IRouteContext>({
  page: "/",
  setPage: () => null,
});

interface IProps {
  page: string;
  setPage: (page: string) => void;
}

export default function RouteProvider({
  page,
  setPage,
  children,
}: PropsWithChildren<IProps>) {
  const routeContext = useMemo(() => ({ page, setPage }), [page, setPage]);

  return (
    <RouteContext.Provider value={routeContext}>
      {children}
    </RouteContext.Provider>
  );
}
