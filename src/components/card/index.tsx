import { CardData, CardType } from "@common/constants";
import EmptyCard from "./EmptyCard";
import NewCard from "./NewCard";
import NormalCard from "./NormalCard";

const Card = ({ type, cardData, onClick }: CardProps) => {
  if (type === CardType.new) return <NewCard onClick={onClick} />;
  if (!cardData) return <EmptyCard />;
  return <NormalCard type={type} cardData={cardData} />;
};

export interface CardProps {
  type: keyof typeof CardType;
  cardData?: CardData;
  onClick?: () => void;
}

export default Card;
