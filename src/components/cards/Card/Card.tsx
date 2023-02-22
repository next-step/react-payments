import React, { MouseEvent, useMemo } from "react";

import * as S from "./card.style";

export type CardInfo = {
  cardName: string;
  cardNumber: string;
  cardOwnerName: string;
  expireDate: string;
};

export interface CardProps {
  size: "big" | "small";
  className?: string;
  color?: string;
  cardInfo: CardInfo;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function Card({
  size,
  color = "#94dacd",
  cardInfo,
  className,
}: CardProps) {
  const { cardName, cardNumber, cardOwnerName, expireDate } = cardInfo;

  const cardNumberWithMasking = useMemo(
    () =>
      cardNumber
        .split("-")
        .map((value, idx) => {
          if (idx < 2) {
            return value;
          } else {
            return value.replaceAll(/[0-9]/g, "•");
          }
        })
        .join("-"),
    [cardNumber]
  );

  return (
    <S.CardContainer className={className} size={size} color={color}>
      <S.CardTopWrapper>
        <S.CardText>{cardName}</S.CardText>
      </S.CardTopWrapper>
      <S.CardMiddleWrapper>
        <S.CardChip />
      </S.CardMiddleWrapper>
      <S.CardBottomWrapper>
        <S.CardNumberWrapper>
          <S.CardText>{cardNumberWithMasking}</S.CardText>
        </S.CardNumberWrapper>
        <S.CardInfoWrapper>
          <S.CardText>{cardOwnerName}</S.CardText>
          <S.CardText>{expireDate}</S.CardText>
        </S.CardInfoWrapper>
      </S.CardBottomWrapper>
    </S.CardContainer>
  );
}
