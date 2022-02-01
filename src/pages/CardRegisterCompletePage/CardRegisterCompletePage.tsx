import { ChangeEventHandler, FormEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PendingCard } from "../../@types";

import Card from "../../components/Card/Card";
import SimpleButton from "../../components/SimpleButton/SimpleButton";
import { CARD_NAME } from "../../constants/card";
import { PATH } from "../../constants/route";
import usePendingCardSelector from "../../stores/card/hooks/usePendingCardSelector";
import cardListActions from "../../stores/cardList/cardListActions";
import useCardListDispatch from "../../stores/cardList/hooks/useCardListDispatch";
import { isCardFormFilled } from "../../utils/validations";
import Styled from "./CardRegisterComplete.styles";

const CardRegisterCompletePage = () => {
  const navigate = useNavigate();
  const pendingCard: PendingCard = usePendingCardSelector((state) => state);
  const cardListDispatch = useCardListDispatch();

  const [cardName, setCardName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeCardName: ChangeEventHandler<HTMLInputElement> = (event) => setCardName(event.target.value);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    cardListDispatch(
      cardListActions.addCard({
        card: {
          ...pendingCard,
          cardName: cardName ? cardName : CARD_NAME[pendingCard.cardType],
        },
      })
    );
    navigate(PATH.HOME);
  };

  useEffect(() => {
    if (!isCardFormFilled(pendingCard)) {
      setErrorMessage("추가된 카드가 없습니다.");
    }
  }, [pendingCard]);

  useEffect(() => {
    if (errorMessage !== "") {
      alert(errorMessage);
      navigate(PATH.HOME);
    }
  }, [errorMessage]);

  return (
    <Styled.Main>
      <Styled.H1>카드등록이 완료되었습니다.</Styled.H1>
      <Styled.Form onSubmit={handleSubmit}>
        <Card
          size="BIG"
          cardNumber={pendingCard.cardNumber}
          cardType={pendingCard.cardType}
          userName={pendingCard.cardUserName}
          expiration={pendingCard.cardExpiration}
        />
        <Styled.CardNameInput
          value={cardName}
          onChange={handleChangeCardName}
          placeholder="카드 별칭 (선택)"
          maxLength={10}
        />
        <SimpleButton>확인</SimpleButton>
      </Styled.Form>
    </Styled.Main>
  );
};

export default CardRegisterCompletePage;
