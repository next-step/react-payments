import type { Meta, StoryObj } from '@storybook/react';

import SecurityCode from './SecurityCode';

const securityCode = '123';
const setSecurityCode = () => {};

const meta = {
  title: 'CARD-ADD/SecurityCode',
  component: SecurityCode,
} satisfies Meta<typeof SecurityCode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    securityCode,
    setSecurityCode,
  },
};
