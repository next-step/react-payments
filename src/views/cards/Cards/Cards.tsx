import React from "react";

import { Card } from "@/components/cards";
import { Header } from "@/components/common";
import cards from "@/constants/data/cardMockData.json";

import { CardWrapper } from "./card.style";

export default function Cards() {
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
            />
          )
        )}
      </CardWrapper>
    </div>
  );
}
