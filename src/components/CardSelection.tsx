import { memo, useCallback } from 'react';
import { ICardBox } from '../domain/types';

export interface ICardSelection {
  onChange: (data: ICardBox) => void;
}

const CARD_DATA1: ICardBox[] = [
  { brand: '클린카드1', color: '#ef5350' },
  { brand: '클린카드2', color: '#ab47bc' },
  { brand: '클린카드3', color: '#5c6bc0' },
  { brand: '클린카드4', color: '#29b6f6' }
];
const CARD_DATA2: ICardBox[] = [
  { brand: '클린카드5', color: '#26a69a' },
  { brand: '클린카드6', color: '#9ccc65' },
  { brand: '클린카드7', color: '#ffee58' },
  { brand: '클린카드8', color: '#ffa726' }
];

function CardSelection({ onChange }: ICardSelection) {
  const handleChange = useCallback((cardCompany) => {
    onChange(cardCompany);
  }, []);

  return (
    <>
      {[CARD_DATA1, CARD_DATA2].map((cardData) => (
        <div className="flex-center" key={crypto.randomUUID()}>
          {cardData.map((cardCompany) => (
            <div className="modal-item-container" key={cardCompany.color} onClick={() => handleChange(cardCompany)}>
              <div className="modal-item-dot" style={{ backgroundColor: cardCompany.color }}></div>
              <span className="modal-item-name">{cardCompany.brand}</span>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default memo(CardSelection);
