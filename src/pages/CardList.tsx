import React from "react";

import { CardContext } from "../App";

import Card from "common/components/card/Card";
import Button from "common/components/button/Button";

import { MAX_CARD_SAVE_LENGTH } from "features/card/data/constants";

export default function CardList() {
  const cardState = CardContext.useSelector((state) => state.context.cardList);
  const cardActionRef = CardContext.useActorRef();

  const handleAddCardButtonClick = () => {
    cardActionRef.send({ type: "SET_STEP", value: "addCard" });
    cardActionRef.send({ type: "INITIALIZE" });
  };

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">보유 카드</h2>
        </div>
        {cardState.map((card) => (
          <React.Fragment key={card.id}>
            <Card
              mode="preview"
              {...card}
              onClick={() =>
                cardActionRef.send({ type: "SELECT_CARD", value: card.id })
              }
            />
            <span className="card-nickname">{card.cardName}</span>
            <Button
              onClick={() =>
                cardActionRef.send({ type: "DELETE", value: card })
              }
            >
              삭제
            </Button>
          </React.Fragment>
        ))}
        {cardState.length !== MAX_CARD_SAVE_LENGTH && (
          <div className="card-box" onClick={handleAddCardButtonClick}>
            <div className="empty-card">+</div>
          </div>
        )}
      </div>
    </div>
  );
}
