import { MouseEventHandler, useCallback } from "react";
import { Pages, useRouteContext } from "../../providers";

export default function useNavigation() {
  const { pushRoute } = useRouteContext();

  const goToCardList = useCallback(() => {
    pushRoute(Pages.CARD_LIST);
  }, [pushRoute]);

  const handleClickCardList: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();
      goToCardList();
    },
    [goToCardList]
  );

  return { handleClickCardList, goToCardList };
}
