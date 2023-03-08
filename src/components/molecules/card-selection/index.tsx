import { memo, useCallback } from 'react';
import { ICard } from '../../../domain/types';
import ModalItem from '../../atoms/modal-item';

export interface ICardSelection {
  onChange: (data: ICard) => void;
}

const CARD_DATA: [ICard[], ICard[]] = [
  [
    { cardCompany: '클린카드1', color: '#ef5350' },
    { cardCompany: '클린카드2', color: '#ab47bc' },
    { cardCompany: '클린카드3', color: '#5c6bc0' },
    { cardCompany: '클린카드4', color: '#29b6f6' }
  ],
  [
    { cardCompany: '클린카드5', color: '#26a69a' },
    { cardCompany: '클린카드6', color: '#9ccc65' },
    { cardCompany: '클린카드7', color: '#ffee58' },
    { cardCompany: '클린카드8', color: '#ffa726' }
  ]
];

function CardSelection({ onChange }: ICardSelection) {
  const handleClick = useCallback((cardCompany: ICard) => {
    onChange(cardCompany);
  }, []);

  return (
    <>
      {CARD_DATA.map((cardData) => (
        <div className="flex-center" key={crypto.randomUUID()}>
          {cardData.map((cardItem) => (
            <ModalItem
              key={cardItem.cardCompany}
              dotColor={cardItem.color}
              title={cardItem.cardCompany}
              onClick={() => handleClick(cardItem)}
            />
          ))}
        </div>
      ))}
    </>
  );
}

export default memo(CardSelection);
