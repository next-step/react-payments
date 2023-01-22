import { MouseEventHandler, useCallback } from "react";
import { Pages, useRouteContext } from "../providers";
import CardForm from "../components/card-form/CardForm";

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
      <h2 className="page-title" onClick={handleClickBack}>
        &lt; 카드 추가
      </h2>

      <CardForm />
    </div>
  );
}
