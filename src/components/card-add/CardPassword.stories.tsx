import { useState } from 'react';

import type { Meta } from '@storybook/react';

import CardPassword from './CardPassword';

const meta = {
  title: 'CARD-ADD/CardPassword',
  component: CardPassword,
} satisfies Meta<typeof CardPassword>;

export default meta;

export function Basic() {
  const [cardPassword, setCardPassword] = useState({
    firstNumber: '1',
    secondNumber: '5',
  });

  return (
    <CardPassword
      cardPassword={cardPassword}
      setCardPassword={setCardPassword}
    />
  );
}
