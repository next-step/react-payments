import { MouseEventHandler, useCallback } from "react";
import { Pages, useRouteContext } from "../../providers";
import { PageTitle } from "../../components";
import { CardForm } from "./card-form";

export default function CardAdd() {
  const { pushRoute } = useRouteContext();

  const handleClickBack: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();
      pushRoute(Pages.CARD_LIST);
    },
    [pushRoute]
  );

  return (
    <div className="app">
      <PageTitle onClick={handleClickBack}>&lt; 카드 추가</PageTitle>

      <CardForm />
    </div>
  );
}
