import { memo, useCallback } from 'react';
import { ICardBox } from '../domain/types';

export interface ICardSelection {
  onChange: (data: ICardBox) => void;
}

const CARD_DATA1 = [
  { brand: '클린카드1', color: '#ef5350' },
  { brand: '클린카드2', color: '#ab47bc' },
  { brand: '클린카드3', color: '#5c6bc0' },
  { brand: '클린카드4', color: '#29b6f6' }
];
const CARD_DATA2 = [
  { brand: '클린카드5', color: '#26a69a' },
  { brand: '클린카드6', color: '#9ccc65' },
  { brand: '클린카드7', color: '#ffee58' },
  { brand: '클린카드8', color: '#ffa726' }
];

function CardSelection({ onChange }: ICardSelection) {
  const handleClick = useCallback((data: ICardBox) => {
    onChange(data);
  }, []);

  return (
    <>
      <div className="flex-center">
        {CARD_DATA1.map(({ brand, color }) => (
          <div className="modal-item-container" key={color} onClick={() => handleClick({ brand, color })}>
            <div className="modal-item-dot" style={{ backgroundColor: color }}></div>
            <span className="modal-item-name">{brand}</span>
          </div>
        ))}
      </div>
      <div className="flex-center">
        {CARD_DATA2.map(({ brand, color }) => (
          <div className="modal-item-container" key={color} onClick={() => handleClick({ brand, color })}>
            <div className="modal-item-dot" style={{ backgroundColor: color }}></div>
            <span className="modal-item-name">{brand}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default memo(CardSelection);