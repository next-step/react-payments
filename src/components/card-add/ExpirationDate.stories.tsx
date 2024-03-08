import { useState } from 'react';

import type { Meta } from '@storybook/react';

import ExpirationDate from './ExpirationDate';

const meta = {
  title: 'CARD-ADD/ExpirationDate',
  component: ExpirationDate,
} satisfies Meta<typeof ExpirationDate>;

export default meta;

export function Basic() {
  const [expirationDate, setExpirationDate] = useState({
    month: '12',
    year: '23',
  });

  return (
    <ExpirationDate
      expirationDate={expirationDate}
      setExpirationDate={setExpirationDate}
    />
  );
}
