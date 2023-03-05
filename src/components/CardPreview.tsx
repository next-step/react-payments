import React, { useContext, useEffect, useState } from "react";
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
import { CardContext } from "../contexts/card";

export interface CardPreviewProps {
  cardNumber: string;
  ownerName: string;
  expirationDate: string;
}

const CardPreview: React.FC<CardPreviewProps> = () => {
  const { cardNumber, ownerName, expirationDate } = useContext(CardContext);

  const [formattedExpirationDate, setFormattedExpirationDate] = useState(
    expirationDate.replace(/^(\d{2})(\d{2})$/, "$1 / $2") || "MM/YY"
  );

  const [formattedOwnerName, setFormattedOwnerName] = useState(
    ownerName.length > 10 ? ownerName.slice(0, 10) : ownerName || "YOUR NAME"
  );

  const [maskedCardNumber, setMaskedCardNumber] = useState(
    cardNumber.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, "$1-$2-****-****")
  );

  useEffect(() => {
    setFormattedExpirationDate(
      expirationDate.replace(/^(\d{2})(\d{2})$/, "$1 / $2") || "MM/YY"
    );
  }, [expirationDate]);

  useEffect(() => {
    setFormattedOwnerName(
      ownerName.length > 15 ? ownerName.slice(0, 15) : ownerName || "YOUR NAME"
    );
  }, [ownerName]);

  useEffect(() => {
    setMaskedCardNumber(
      cardNumber.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, "$1-$2-****-****")
    );
  }, [cardNumber]);

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
            <CardText>{maskedCardNumber}</CardText>
          </CardBottomNumber>
          <CardBottomInfo>
            <CardText>{formattedOwnerName}</CardText>
            <CardText>{formattedExpirationDate}</CardText>
          </CardBottomInfo>
        </CardBottom>
      </SmallCard>
    </CardBox>
  );
};

export default CardPreview;
