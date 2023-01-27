import { useCallback, useEffect, useState } from "react";
import { Pages } from "../const";

const BASE_URL = "/react-payments";

export default function useRoute() {
  const [page, setPage] = useState<string>(Pages.CARD_LIST);

  const pushRoute = useCallback((page: string) => {
    setPage(page);
    history.pushState(null, "", BASE_URL + page);
  }, []);

  const syncRoute = useCallback(() => {
    const pathname = window.location.pathname.replace(BASE_URL, "");
    setPage(pathname);
  }, []);

  useEffect(() => {
    syncRoute();

    window.addEventListener("popstate", syncRoute);

    return () => window.removeEventListener("popstate", syncRoute);
  }, [syncRoute]);

  return { page, pushRoute };
}
