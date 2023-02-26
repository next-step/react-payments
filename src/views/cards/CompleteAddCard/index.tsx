import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Card } from "@/components/cards";
import { Button, Input } from "@/components/common";
import { CardItem, useCardsContext } from "@/contexts/CardsContext";
import useInput from "@/hooks/useInput";
import { CardPageLayout } from "@/layouts/cards";
import { domains } from "@/router";

import * as S from "./completeAddCard";

export default function CompleteAddCard() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { dispatch } = useCardsContext();

  const { value, onChange } = useInput({ cardName: "" });

  useEffect(() => {
    const { cardInfo } = state;

    if (!cardInfo) navigate(domains.CARD_LIST);
  }, []);

  const newCardInfo: CardItem = useMemo(
    () => ({
      ...state.cardInfo,
      cardName: value.cardName,
    }),
    [value]
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
      {state.cardInfo && (
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
            <Input
              id="cardName"
              variant="underlined"
              textAlign="center"
              value={value.cardName}
              onChange={onChange}
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
