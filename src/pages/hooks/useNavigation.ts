import { MouseEventHandler, useCallback } from "react";
import { Pages, useRouteContext } from "../../providers";

export default function useNavigation() {
  const { pushRoute } = useRouteContext();

  const goToCardList: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();
      pushRoute(Pages.CARD_LIST);
    },
    [pushRoute]
  );

  return { goToCardList };
}
