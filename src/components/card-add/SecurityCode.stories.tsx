import { useState } from 'react';

import type { Meta } from '@storybook/react';

import SecurityCode from './SecurityCode';

const meta = {
  title: 'CARD-ADD/SecurityCode',
  component: SecurityCode,
} satisfies Meta<typeof SecurityCode>;

export default meta;

export function Basic() {
  const [securityCode, setSecurityCode] = useState('');

  return (
    <SecurityCode
      securityCode={securityCode}
      setSecurityCode={setSecurityCode}
    />
  );
}
