import { MouseEventHandler, useCallback } from "react";
import { Pages, useRouteContext } from "../../providers";

export default function useNavigation() {
  const { pushRoute } = useRouteContext();

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
  };
}
