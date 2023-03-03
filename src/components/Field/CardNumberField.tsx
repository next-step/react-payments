import { Input, InputContainer } from '@components/Common';
import { renderTextDivider } from '@/utils';
import { CardNumber } from '@/types';
import FieldContainer from './FieldContainer';

import type { ChangeEvent } from 'react';

type CardNumberFieldProps = {
  title: string;
  value: CardNumber;
  minLength: number;
  maxLength: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function CardNumberField({ title, value, onChange, minLength = 0, maxLength = 4 }: CardNumberFieldProps) {
  const { cardNumber1, cardNumber2, cardNumber3, cardNumber4 } = value;
  return (
    <FieldContainer title={title}>
      <InputContainer size="full">
        <Input
          type="text"
          minLength={minLength}
          maxLength={maxLength}
          pattern="[0-9]*"
          value={cardNumber1}
          name="cardNumber1"
          onChange={onChange}
        />
        {renderTextDivider({ formerValue: cardNumber1, latterValue: cardNumber2, divider: '-' })}
        <Input
          type="text"
          minLength={0}
          maxLength={4}
          pattern="[0-9]*"
          value={cardNumber2}
          name="cardNumber2"
          onChange={onChange}
        />
        {renderTextDivider({ formerValue: cardNumber2, latterValue: cardNumber3, divider: '-' })}
        <Input
          type="password"
          minLength={0}
          maxLength={4}
          pattern="[0-9]*"
          value={cardNumber3}
          name="cardNumber3"
          onChange={onChange}
        />
        {renderTextDivider({ formerValue: cardNumber3, latterValue: cardNumber4, divider: '-' })}
        <Input
          type="password"
          minLength={0}
          maxLength={4}
          pattern="[0-9]*"
          value={cardNumber4}
          name="cardNumber4"
          onChange={onChange}
        />
      </InputContainer>
    </FieldContainer>
  );
}

export default CardNumberField;
