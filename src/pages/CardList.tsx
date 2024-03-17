import React from "react";

import { CardContext } from "../App";

import Card from "common/components/card/Card";
import Button from "common/components/button/Button";

export default function CardList() {
  const cardState = CardContext.useSelector((state) => state.context.cardList);
  const cardActionRef = CardContext.useActorRef();

  const handleAddCardButtonClick = () => {
    cardActionRef.send({ type: "STEP", value: "addCard" });
    cardActionRef.send({ type: "INITIALIZE" });
  };

  console.log(cardState);

  return (
    <div>
      <Button onClick={handleAddCardButtonClick}>추가</Button>
      {cardState.map((card) => (
        <React.Fragment key={card.id}>
          <Card
            mode="complete"
            {...card}
            onClick={() =>
              cardActionRef.send({ type: "STEP", value: "addCardSuccess" })
            }
          />
          <Button
            onClick={() => cardActionRef.send({ type: "DELETE", value: card })}
          >
            삭제
          </Button>
        </React.Fragment>
      ))}
    </div>
  );
}
