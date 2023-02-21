import { memo } from 'react';
import { CardCompanyType } from '../domain/types';

export interface Props {
  onChange: (data: object) => void;
}

const CARD_DATA1 = [
  { cardCompany: '클린카드1', color: '#ef5350' },
  { cardCompany: '클린카드2', color: '#ab47bc' },
  { cardCompany: '클린카드3', color: '#5c6bc0' },
  { cardCompany: '클린카드4', color: '#29b6f6' },
];
const CARD_DATA2 = [
  { cardCompany: '클린카드5', color: '#26a69a' },
  { cardCompany: '클린카드6', color: '#9ccc65' },
  { cardCompany: '클린카드7', color: '#ffee58' },
  { cardCompany: '클린카드8', color: '#ffa726' },
];

function CardSelection({ onChange }: Props) {
  const handleClick = (data: CardCompanyType) => {
    onChange(data);
  };

  return (
    <>
      <div className="flex-center">
        {CARD_DATA1.map(({ cardCompany, color }) => (
          <div className="modal-item-container" key={color} onClick={() => handleClick({ cardCompany, color })}>
            <div className="modal-item-dot" style={{ backgroundColor: color }}></div>
            <span className="modal-item-name">{cardCompany}</span>
          </div>
        ))}
      </div>
      <div className="flex-center">
        {CARD_DATA2.map(({ cardCompany, color }) => (
          <div className="modal-item-container" key={color} onClick={() => handleClick({ cardCompany, color })}>
            <div className="modal-item-dot" style={{ backgroundColor: color }}></div>
            <span className="modal-item-name">{cardCompany}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default memo(CardSelection);