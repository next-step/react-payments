import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, EmptyCard } from "@/components/cards";
import { Header } from "@/components/common";
import { useCardsContext } from "@/contexts";
import { CardItem } from "@/contexts/CardsContext";
import { domains } from "@/router";

import { CardWrapper } from "./card.style";

export default function Cards() {
  const navigate = useNavigate();

  const { value: cards } = useCardsContext();

  const handleMoveToAddCardPage = () => {
    navigate(domains.CARD_ADD);
  };

  const handleMoveToEditCardPage = (cardItem: CardItem) => {
    navigate(`${domains.CARD_EDIT}`, {
      state: {
        cardInfo: cardItem,
      },
    });
  };

  return (
    <div>
      <Header>보유카드</Header>
      <CardWrapper>
        {cards.map(
          ({ id, cardName, cardNumber, cardOwnerName, expireDate, color }) => (
            <Card
              key={id}
              cardInfo={{
                cardName,
                cardNumber,
                cardOwnerName,
                expireDate,
              }}
              size="small"
              color={color}
              onClick={() =>
                handleMoveToEditCardPage({
                  id,
                  cardName,
                  cardNumber,
                  cardOwnerName,
                  expireDate,
                  color,
                })
              }
            />
          )
        )}
        <EmptyCard size="small" onClick={handleMoveToAddCardPage} />
      </CardWrapper>
    </div>
  );
}
