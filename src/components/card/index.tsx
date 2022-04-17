import { CardType } from "@common/constants";
import { CardData } from "@common/defines";
import { MouseEventHandler } from "react";
import EmptyCard from "./EmptyCard";
import NormalCard from "./NormalCard";

const Card = ({ type, cardData, onClick }: CardProps) => {
  const hasCardData: boolean =
    !!(cardData?.cardNumber && cardData.cardNumber.length > 0) ||
    !!(cardData?.expired && cardData.expired.length > 0) ||
    !!(cardData?.userName && cardData.userName.length > 0);

  if (hasCardData) {
    return <NormalCard type={type} cardData={cardData!} onClick={onClick} />;
  } else {
    return <EmptyCard />;
  }
};

export interface CardProps {
  type: keyof typeof CardType;
  cardData?: CardData;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default Card;
