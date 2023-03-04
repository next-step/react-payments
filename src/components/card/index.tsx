import { CardCompany, CardNumber, ExpirationDate } from "store/type";
import {
  CardBottomBox,
  CardBottomBoxInfo,
  CardChip,
  CardCompanyText,
  CardMiddleBox,
  CardNumberBox,
  CardText,
  CardTopBox,
  CardWrapper,
  VariableWrapper,
} from "./style";
import React from "react";

const isHypen = (number: string) => {
  return number.length === 4 ? " - " : "";
};

const maskingCardNumbers = (number: string) => number.replace(/./g, "*");

const showCardName = (name: string) => (name ? name : "NAME");

const showCardExpiry = (month: string, year: string) => {
  return month ? `${month} / ${year || "YY"}` : "MM / YY";
};

type CardProps = {
  cardNumbers: CardNumber;
  cardExpiration: ExpirationDate;
  cardOwnerName: string;
  cardCompany: CardCompany;
  size: "small" | "big";
};

const Card = ({
  cardNumbers,
  cardExpiration,
  cardOwnerName,
  cardCompany,
  size,
}: CardProps) => {
  return (
    <CardWrapper>
      <VariableWrapper size={size} style={{ background: cardCompany?.color }}>
        <CardTopBox>
          <CardCompanyText size={size}>{cardCompany?.name}</CardCompanyText>
        </CardTopBox>
        <CardMiddleBox>
          <CardChip size={size}></CardChip>
        </CardMiddleBox>
        <CardBottomBox>
          <CardNumberBox>
            {cardNumbers && (
              <CardText size={size}>
                {cardNumbers[0]} {isHypen(cardNumbers[0])}
                {cardNumbers[1]} {isHypen(cardNumbers[1])}
                {maskingCardNumbers(cardNumbers[2])} {isHypen(cardNumbers[2])}
                {maskingCardNumbers(cardNumbers[3])}
              </CardText>
            )}
          </CardNumberBox>
          <CardBottomBoxInfo>
            <CardText size={size} elipsis={"yes"}>
              {cardOwnerName && showCardName(cardOwnerName)}
            </CardText>
            <CardText size={size}>
              {cardExpiration &&
                showCardExpiry(cardExpiration.month, cardExpiration.year)}
            </CardText>
          </CardBottomBoxInfo>
        </CardBottomBox>
      </VariableWrapper>
    </CardWrapper>
  );
};

export default React.memo(Card);
