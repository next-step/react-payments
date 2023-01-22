import { useCallback, useEffect, useState } from "react";
import { isPages, TPages } from "../types";
import { Pages } from "../const";

export default function useRoute() {
  const [page, setPage] = useState<TPages>(Pages.CARD_LIST);

  const pushRoute = useCallback((page: TPages) => {
    setPage(page);
    history.pushState(null, "", page);
  }, []);

  const syncRoute = useCallback(() => {
    const { pathname } = window.location;
    if (isPages(pathname)) {
      setPage(pathname);
    }
  }, []);

  useEffect(() => {
    syncRoute();

    window.addEventListener("popstate", syncRoute);

    return () => window.removeEventListener("popstate", syncRoute);
  }, [syncRoute]);

  return { page, pushRoute };
}
