import React, { useMemo } from "react";

import type { CardNumber } from "../CardNumberInput/hook/useCardNumberInput";
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

export type CardInfo = {
  cardName: string;
  cardNumber: CardNumber;
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

  const cardNumberWithDash = useMemo(
    () =>
      Object.entries(cardNumber)
        .map(([_, value], idx) => {
          if (idx <= 1) {
            return value;
          } else {
            return value.replaceAll(/[0-9]/g, "•");
          }
        })
        .filter((number) => number !== "")
        .join("-"),
    [cardNumber]
  );

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
          <CardText>{cardNumberWithDash}</CardText>
        </CardNumberWrapper>
        <CardInfoWrapper>
          <CardText>{cardOwnerName}</CardText>
          <CardText>{expireDate}</CardText>
        </CardInfoWrapper>
      </CardBottomWrapper>
    </CardContainer>
  );
}
