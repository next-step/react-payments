import { MouseEventHandler, useCallback } from "react";
import { Pages, useRouteContext } from "../providers";
import { Card } from "../components";
import { ICard } from "../domain";

const cardItem: ICard = {
  type: "로이드",
  numbers: ["1234", "5678", "1234", "5678"],
  owner: "김로이드",
  expiredMonth: "12",
  expiredYear: "25",
};

export default function CardList() {
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

      <Card {...cardItem} />

      <div className="card-box">
        <div className="empty-card" onClick={handleClickCardAdd}>
          +
        </div>
      </div>
    </div>
  );
}
