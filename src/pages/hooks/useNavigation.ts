import { MouseEventHandler, useCallback, useMemo } from "react";
import { Pages, useRouteContext } from "../../providers";

export default function useNavigation() {
  const { pushRoute, page } = useRouteContext();

  const cardId = useMemo(() => {
    if (page.startsWith(Pages.CARD_EDIT)) {
      return page.replace(`${Pages.CARD_EDIT}/`, "");
    }
    return undefined;
  }, [page]);

  const goToCardList = useCallback(() => {
    pushRoute(Pages.CARD_LIST);
  }, [pushRoute]);

  const goToCardEdit = useCallback(
    (id?: string) => {
      pushRoute([Pages.CARD_EDIT, id].filter(Boolean).join("/"));
    },
    [pushRoute]
  );

  const handleClickCardList: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();
      goToCardList();
    },
    [goToCardList]
  );

  const handleClickCardAdd: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();
      goToCardEdit();
    },
    [goToCardEdit]
  );

  return {
    handleClickCardList,
    handleClickCardAdd,
    goToCardList,
    goToCardEdit,
    cardId,
  };
}
