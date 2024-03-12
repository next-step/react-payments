import { Fragment } from 'react/jsx-runtime';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import type { CardInfo } from '../../types';
import {
  CARD_STORAGE_KEY,
  getLocalStorageItem,
} from '../../utils/localStorage';

interface Props {
  onNext: () => void;
}

const CardList = ({ onNext }: Props) => {
  const cards: CardInfo[] = getLocalStorageItem({ key: CARD_STORAGE_KEY });
  return (
    <>
      <Header className='mb-10'>
        <span>보유카드</span>
      </Header>

      <div className='flex-column-center'>
        {cards?.map((card) => {
          const { first, second } = card.numbers;
          const { month, year } = card.expiration;
          const key = first + second + month + year;
          return (
            <Fragment key={key}>
              <div className='card-box'>
                <Card {...card} />
              </div>
              <span className='card-nickname'>{card.nickname}</span>
            </Fragment>
          );
        })}

        <div className='card-box'>
          <div className='empty-card' onClick={onNext}>
            +
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
