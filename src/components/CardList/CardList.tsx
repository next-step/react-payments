import Card, { ICardInfo } from '../Card/Card';
import EmptyCard from '../EmptyCard/EmptyCard';

interface CardListProps {
  cardInfoList: ICardInfo[];
  onClickEmptyCard: () => void;
}

const CardList = ({ cardInfoList, onClickEmptyCard }: CardListProps) => (
  <div className="card-list">
    {cardInfoList.map(cardInfo => (
      <Card {...cardInfo} />
    ))}
    <EmptyCard onClick={onClickEmptyCard} />
  </div>
);

export default CardList;
