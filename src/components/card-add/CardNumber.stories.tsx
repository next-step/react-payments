import { useState } from 'react';

import type { Meta } from '@storybook/react';

import CardNumber from './CardNumber';

import type { CardNumberType } from '../../types/CardFormType';

type CardNumberProps = {
  cardNumber: CardNumberType;
  setCardNumber: (
    prevState: CardNumberType | ((prevState: CardNumberType) => CardNumberType)
  ) => void;
};

const meta = {
  title: 'CARD-ADD/CardNumber',
  component: CardNumber,
} satisfies Meta<typeof CardNumber>;

export default meta;

export function Basic(args: CardNumberProps) {
  const [cardNumber, setCardNumber] = useState({
    firstNumber: '1234',
    secondNumber: '5678',
    thirdNumber: '1357',
    fourthNumber: '2468',
  });

  return (
    <CardNumber
      {...args}
      cardNumber={cardNumber}
      setCardNumber={setCardNumber}
    />
  );
}
