import { ChangeEvent } from 'react';
import { Input } from '../Common';
import FieldContainer from './FieldContainer';
import { renderTextDivider } from '@/utils';

type CardNumber = {
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
};

function CardNumberField({
  title,
  value,
  onChange,
}: {
  title: string;
  value: CardNumber;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  const { cardNumber1, cardNumber2, cardNumber3, cardNumber4 } = value;
  return (
    <FieldContainer title={title}>
      <div className="input-box flex-center">
        <Input type="text" minLength={0} maxLength={4} value={cardNumber1} name="cardNumber1" onChange={onChange} />
        {renderTextDivider({ formerValue: cardNumber1, latterValue: cardNumber2, divider: '-' })}
        <Input type="text" minLength={0} maxLength={4} value={cardNumber2} name="cardNumber2" onChange={onChange} />
        {renderTextDivider({ formerValue: cardNumber2, latterValue: cardNumber3, divider: '-' })}
        <Input type="password" minLength={0} maxLength={4} value={cardNumber3} name="cardNumber3" onChange={onChange} />
        {renderTextDivider({ formerValue: cardNumber3, latterValue: cardNumber4, divider: '-' })}
        <Input type="password" minLength={0} maxLength={4} value={cardNumber4} name="cardNumber4" onChange={onChange} />
      </div>
    </FieldContainer>
  );
}

export default CardNumberField;
