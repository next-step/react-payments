import { ChangeEvent } from 'react';
import { Input } from '../Common';
import FieldContainer from './FieldContainer';

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
  return (
    <FieldContainer title={title}>
      <div className="input-box flex-center">
        <Input
          type="text"
          minLength={0}
          maxLength={4}
          value={value.cardNumber1}
          name="cardNumber1"
          onChange={onChange}
        />
        -
        <Input
          type="text"
          minLength={0}
          maxLength={4}
          value={value.cardNumber2}
          name="cardNumber2"
          onChange={onChange}
        />
        -
        <Input
          type="password"
          minLength={0}
          maxLength={4}
          value={value.cardNumber3}
          name="cardNumber3"
          onChange={onChange}
        />
        -
        <Input
          type="password"
          minLength={0}
          maxLength={4}
          value={value.cardNumber4}
          name="cardNumber4"
          onChange={onChange}
        />
      </div>
    </FieldContainer>
  );
}

export default CardNumberField;
