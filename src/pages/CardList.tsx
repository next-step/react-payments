import Card from "common/components/card/Card";
import { CardContext } from "../App";
import Button from "common/components/button/Button";

export default function CardList() {
  const cardState = CardContext.useSelector((state) => state.context.cardList);
  const cardActionRef = CardContext.useActorRef();

  console.log("뀨!?", cardState);

  return (
    <div>
      <Button
        onClick={() => cardActionRef.send({ type: "STEP", value: "addCard" })}
      >
        추가
      </Button>
      {cardState.map((card) => (
        <Card key={card.cardNumber1} mode="complete" {...card} />
      ))}
    </div>
  );
}
