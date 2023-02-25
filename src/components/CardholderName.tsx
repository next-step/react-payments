import { ChangeEvent } from 'react';
import { CARD } from '../utils/card_constants';

type CardNameProps = {
  cardHolderName: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CardholderName = ({ cardHolderName, onChange }: CardNameProps) => {
  return (
    <div className="input-container">
      <span className="input-title">카드 소유자 이름(선택)</span>
      <span>
        {cardHolderName.length}/{CARD.HOLDERNAME_LENGTH}
      </span>
      <input
        type="text"
        className="input-basic"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        maxLength={CARD.HOLDERNAME_LENGTH}
        value={cardHolderName}
        onChange={onChange}
      />
    </div>
  );
};

export default CardholderName;
