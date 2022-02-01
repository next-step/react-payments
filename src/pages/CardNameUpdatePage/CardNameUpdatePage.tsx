import { ChangeEventHandler, FormEventHandler, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card as CardModel } from "../../@types";

import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import SimpleButton from "../../components/SimpleButton/SimpleButton";
import { PATH } from "../../constants/route";
import cardListActions from "../../stores/cardList/cardListActions";
import useCardListDispatch from "../../stores/cardList/hooks/useCardListDispatch";
import useCardListSelector from "../../stores/cardList/hooks/useCardListSelector";
import Styled from "./CardNameUpdatePage.styles";

const CardNameUpdatePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cardId = useMemo(() => new URLSearchParams(location.search).get("id") ?? "", [location.search]);
  const currentCard = useCardListSelector((state) => state[cardId]);
  const cardListDispatch = useCardListDispatch();

  const [isMounted, setIsMounted] = useState(false);
  const [cardName, setCardName] = useState<CardModel["cardName"]>("");

  const handleChangeCardName: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCardName(event.target.value);
  };

  const handleSubmitCardNameForm: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    cardListDispatch(cardListActions.updateCardName({ id: cardId, cardName }));
    navigate(PATH.HOME);
  };

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);

      return;
    }

    if (!currentCard) {
      alert("수정할 카드가 존재하지 않습니다.");
      navigate(PATH.HOME);
    }
  }, [currentCard, isMounted]);

  useEffect(() => {
    setCardName(currentCard?.cardName ?? "");
  }, [currentCard]);

  return (
    <>
      <Header goBackLink={PATH.HOME}>카드 별칭 수정</Header>
      <Styled.Main>
        <Styled.Form onSubmit={handleSubmitCardNameForm}>
          <Card
            size="BIG"
            cardNumber={currentCard?.cardNumber}
            cardType={currentCard?.cardType}
            userName={currentCard?.cardUserName}
            expiration={currentCard?.cardExpiration}
          />
          <Styled.CardNameInput type="text" value={cardName} onChange={handleChangeCardName} />
          <SimpleButton>확인</SimpleButton>
        </Styled.Form>
      </Styled.Main>
    </>
  );
};

export default CardNameUpdatePage;
