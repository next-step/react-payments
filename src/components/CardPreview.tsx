import React, { useContext, useEffect, useState } from "react";
import {
  CardBottom,
  CardBottomInfo,
  CardBottomNumber,
  CardBox,
  CardMiddle,
  CardText,
  CardTop,
  EmptyCard,
  SmallCard,
  SmallCardChip,
} from "./common/Card";
import { CardContext } from "../contexts/Card";

export interface CardPreviewProps {
  isAllInfoEntered: boolean;
}

const CardPreview: React.FC<CardPreviewProps> = ({ isAllInfoEntered }) => {
  const { cardNumber, ownerName, expirationDate } = useContext(CardContext);

  const [formattedExpirationDate, setFormattedExpirationDate] = useState(
    expirationDate.replace(/^(\d{2})(\d{2})$/, "$1 / $2") || "MM/YY"
  );

  const [formattedOwnerName, setFormattedOwnerName] = useState(
    ownerName.length > 10 ? ownerName.slice(0, 10) : ownerName || "NAME"
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
      ownerName.length > 15 ? ownerName.slice(0, 15) : ownerName || "NAME"
    );
  }, [ownerName]);

  useEffect(() => {
    setMaskedCardNumber(
      cardNumber.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})$/, "$1-$2-****-****")
    );
  }, [cardNumber]);

  return (
    <CardBox>
      {isAllInfoEntered ? (
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
      ) : (
        <EmptyCard>
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
        </EmptyCard>
      )}
    </CardBox>
  );
};

export default CardPreview;
