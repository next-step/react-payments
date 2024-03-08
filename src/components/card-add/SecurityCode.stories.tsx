import { Dispatch, SetStateAction, useState } from 'react';

import type { Meta } from '@storybook/react';

import SecurityCode from './SecurityCode';

type SecurityCoderops = {
  securityCode: string;
  setSecurityCode: Dispatch<SetStateAction<string>>;
};

const meta = {
  title: 'CARD-ADD/SecurityCode',
  component: SecurityCode,
} satisfies Meta<typeof SecurityCode>;

export default meta;

export function Basic(args: SecurityCoderops) {
  const [securityCode, setSecurityCode] = useState('');

  return (
    <SecurityCode
      {...args}
      securityCode={securityCode}
      setSecurityCode={setSecurityCode}
    />
  );
}
