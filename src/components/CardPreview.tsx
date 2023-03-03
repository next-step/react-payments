import React from "react";
import {
  CardBottom,
  CardBottomInfo,
  CardBottomNumber,
  CardBox,
  CardMiddle,
  CardText,
  CardTop,
  SmallCard,
  SmallCardChip,
} from "./common/Card";

export interface CardPreviewProps {
  cardNumber: string;
  ownerName: string;
  expirationDate: string;
}

const CardPreview: React.FC<CardPreviewProps> = ({
  cardNumber,
  ownerName,
  expirationDate,
}) => {
  const formattedCardNumber = cardNumber.replace(/\d{4}(?=.)/g, "$&-");
  const formattedExpirationDate = expirationDate.replace(
    /^(\d{2})(\d{2})$/,
    "$1 / $2"
  );
  return (
    <CardBox>
      <SmallCard>
        <CardTop>
          <CardText>클린카드</CardText>
        </CardTop>
        <CardMiddle>
          <SmallCardChip />
        </CardMiddle>
        <CardBottom>
          <CardBottomNumber>
            <CardText>{formattedCardNumber}</CardText>
          </CardBottomNumber>
          <CardBottomInfo>
            <CardText>{ownerName}</CardText>
            <CardText>{formattedExpirationDate}</CardText>
          </CardBottomInfo>
        </CardBottom>
      </SmallCard>
    </CardBox>
  );
};

export default CardPreview;
