import type { Meta, StoryObj } from '@storybook/react';

import CardCompany from './CardCompany';

const cardAlias = '생활비 카드';

const meta = {
  title: 'CARD-ADD/CardCompany',
  component: CardCompany,
} satisfies Meta<typeof CardCompany>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardAlias,
  },
};
