import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Card, CardNameInput } from "@/components/cards";
import { useCardNameInput } from "@/components/cards/CardNameInput/hook";
import { Button } from "@/components/common";
import { CardItem, useCardsContext } from "@/contexts/CardsContext";
import { CardPageLayout } from "@/layouts/cards";
import { domains } from "@/router";

import * as S from "./completeAddCard";

export default function CompleteAddCard() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { dispatch } = useCardsContext();

  const { cardName, onCardNameChange } = useCardNameInput({
    cardName: state?.cardInfo?.cardName ?? "",
  });

  useEffect(() => {
    if (!state?.cardInfo) navigate(domains.CARD_LIST);
  }, []);

  const newCardInfo: CardItem = useMemo(
    () => ({
      ...state?.cardInfo,
      cardName: cardName.cardName,
    }),
    [cardName.cardName]
  );

  const handleMoveToCardsPage = () => {
    dispatch({
      type: "UPDATE_CARD",
      payload: { id: newCardInfo.id, newInfo: newCardInfo },
    });
    navigate(domains.CARD_LIST);
  };

  return (
    <>
      {state?.cardInfo && (
        <CardPageLayout>
          <S.CompletedCardWrapper>
            <S.CompleteCardLabel>
              카드등록이 완료되었습니다.
            </S.CompleteCardLabel>
            <Card
              size="big"
              cardInfo={newCardInfo}
              color={state.cardInfo.color}
            />
            <CardNameInput
              id="cardName"
              value={cardName.cardName}
              onChange={onCardNameChange}
            />
          </S.CompletedCardWrapper>
          <S.CompleteCardButtonWrapper>
            <Button onClick={handleMoveToCardsPage}>확인</Button>
          </S.CompleteCardButtonWrapper>
        </CardPageLayout>
      )}
    </>
  );
}
