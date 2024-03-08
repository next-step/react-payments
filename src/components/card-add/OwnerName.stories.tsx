import { useState } from 'react';

import type { Meta } from '@storybook/react';

import OwnerName from './OwnerName';

const meta = {
  title: 'CARD-ADD/OwnerName',
  component: OwnerName,
} satisfies Meta<typeof OwnerName>;

export default meta;

export function Basic() {
  const [ownerName, setOwnerName] = useState('');

  return <OwnerName ownerName={ownerName} setOwnerName={setOwnerName} />;
}
