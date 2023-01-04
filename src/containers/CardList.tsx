import { MouseEventHandler, useCallback } from "react";
import { Pages, useRouteContext } from "../providers";
import { Card } from "../components";

interface IProps {}

export default function CardList(props: IProps) {
  const { pushRoute } = useRouteContext();

  const handleClickCardAdd: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();
      pushRoute(Pages.CARD_ADD);
    },
    [pushRoute]
  );

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      <Card />
      <div className="card-box">
        <div className="empty-card" onClick={handleClickCardAdd}>
          +
        </div>
      </div>
    </div>
  );
}
