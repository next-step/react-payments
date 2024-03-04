import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import type { Card as CardType } from '../../types';
import { CARD_KEY, getLocalStorageItem } from '../../utils/localStorage';

interface Props {
  onNext: () => void;
}

const CardList = ({ onNext }: Props) => {
  const cards: CardType[] = getLocalStorageItem({ key: CARD_KEY });

  return (
    <>
      <Header className='mb-10'>
        <span>보유카드</span>
      </Header>

      {cards?.map((card, index) => (
        <div className='card-box' key={index}>
          <Card {...card} />
        </div>
      ))}
      <div className='card-box'>
        <div className='empty-card' onClick={onNext}>
          +
        </div>
      </div>
    </>
  );
};

export default CardList;
