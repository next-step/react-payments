import React from "react";
import {
  CardBottom,
  CardBottomInfo,
  CardBottomNumber,
  CardBox,
  CardMiddle,
  CardText,
  CardTop,
  PaymentsCard,
  SmallCardChip,
} from "./common/PaymentsCard";
import { useCardPreview } from "../hooks/useCardPreview";

export interface CardPreviewProps {
  isAllInfoEntered: boolean;
}

const CardPreview: React.FC<CardPreviewProps> = ({ isAllInfoEntered }) => {
  const { maskedCardNumber, formattedOwnerName, formattedExpirationDate } =
    useCardPreview();

  return (
    <CardBox>
      <CardBox>
        <PaymentsCard type={isAllInfoEntered ? "small" : "empty"}>
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
        </PaymentsCard>
      </CardBox>
    </CardBox>
  );
};

export default CardPreview;
