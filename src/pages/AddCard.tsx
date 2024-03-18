import { CardContext } from "../App";

import Layout from "common/components/layout";
import Button from "common/components/button/Button";
import Title from "common/components/title/Title";
import Card from "common/components/card/Card";

import InputCardForm from "features/card/components/InputCardForm";
import CardTypeDialog from "features/card/components/CardTypeDialog";

export default function AddCard() {
  const cardState = CardContext.useSelector((state) => state.context.card);
  const dialogState = CardContext.useSelector(
    (state) => state.context.showCardTypeDialog
  );
  const cardActionRef = CardContext.useActorRef();

  const handleNextButtonClick = () => {
    if (cardState.cardType !== "") {
      cardActionRef.send({ type: "SET_STEP", value: "addCardSuccess" });
    } else {
      cardActionRef.send({ type: "TOGGLE", value: true });
    }
  };

  return (
    <Layout.Basic>
      <Title
        button={
          <span
            className="button-text"
            onClick={() =>
              cardActionRef.send({ type: "SET_STEP", value: "cardList" })
            }
          >
            &lt;
          </span>
        }
      >
        카드 추가
      </Title>
      <Card mode="preview" {...cardState} />
      <InputCardForm />
      <Button onClick={handleNextButtonClick}>다음</Button>
      {dialogState && <CardTypeDialog />}
    </Layout.Basic>
  );
}
