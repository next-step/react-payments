import { ICardInfo } from 'src/utils/types';
import Card from '../Card/Card';
import EmptyCard from '../EmptyCard/EmptyCard';

interface CardListProps {
  cardInfoList: ICardInfo[];
  onClickCard: (cardInfo: ICardInfo) => void;
  onClickEmptyCard: () => void;
}

const CardList = ({
  cardInfoList,
  onClickCard,
  onClickEmptyCard,
}: CardListProps) => (
  <div className="card-list">
    {cardInfoList.map(cardInfo => (
      <Card
        key={cardInfo.id}
        {...cardInfo}
        onClick={() => onClickCard(cardInfo)}
      />
    ))}
    <EmptyCard onClick={onClickEmptyCard} />
  </div>
);

export default CardList;
