import { ChangeEvent } from "react";

import { CardContext } from "../App";

import Button from "common/components/button/Button";
import Title from "common/components/title/Title";
import Layout from "common/components/layout";
import Card from "common/components/card/Card";

import InputCardName from "features/card/components/InputCardName";

export default function SuccessAddCard() {
  const cardState = CardContext.useSelector((state) => state.context.card);
  const cardActionRef = CardContext.useActorRef();

  const handleConfirmButtonClick = () => {
    cardActionRef.send({ type: "SET_STEP", value: "cardList" });
    cardActionRef.send({ type: "CONFIRM", value: cardState });
  };

  const handleChangeCardName = (e: ChangeEvent<HTMLInputElement>) => {
    cardActionRef.send({
      type: "SET_CARD_INFO",
      field: "cardName",
      value: e.target.value,
    });
  };

  return (
    <Layout.Success>
      <Title className="page-title mb-10">카드등록이 완료되었습니다.</Title>
      <Card mode="complete" {...cardState} />
      <InputCardName
        onChangeCardName={handleChangeCardName}
        cardName={cardState.cardName}
      />
      <Button onClick={handleConfirmButtonClick}>확인</Button>
    </Layout.Success>
  );
}
