import React from "react";

import {
  CardBottomWrapper,
  CardChip,
  CardContainer,
  CardInfoWrapper,
  CardMiddleWrapper,
  CardNumberWrapper,
  CardText,
  CardTopWrapper,
} from "./card.style";

type CardInfo = {
  cardName: string;
  cardNumber: string[];
  cardOwnerName: string;
  expireDate: string;
};

export interface CardProps {
  size: "big" | "small";
  className?: string;
  color?: string;
  cardInfo: CardInfo;
}

export default function Card({
  size,
  color = "#94dacd",
  cardInfo,
  className,
}: CardProps) {
  const { cardName, cardNumber, cardOwnerName, expireDate } = cardInfo;

  return (
    <CardContainer className={className} size={size} color={color}>
      <CardTopWrapper>
        <CardText>{cardName}</CardText>
      </CardTopWrapper>
      <CardMiddleWrapper>
        <CardChip />
      </CardMiddleWrapper>
      <CardBottomWrapper>
        <CardNumberWrapper>
          {cardNumber.map((number, idx) => (
            <CardText key={idx}>{number}</CardText>
          ))}
        </CardNumberWrapper>
        <CardInfoWrapper>
          <CardText>{cardOwnerName}</CardText>
          <CardText>{expireDate}</CardText>
        </CardInfoWrapper>
      </CardBottomWrapper>
    </CardContainer>
  );
}
