import { CardData, CardType } from "@common/constants";
import EmptyCard from "./EmptyCard";
import NormalCard from "./NormalCard";

const Card = ({ type, cardData }: CardProps) => {
  if (!cardData) return <EmptyCard />;
  return <NormalCard type={type} cardData={cardData} />;
};

export interface CardProps {
  type: keyof typeof CardType;
  cardData?: CardData;
}

export default Card;
