import type { Meta, StoryObj } from '@storybook/react';

import CardCompanyList from './CardCompanyList';

const meta = {
  title: 'CARD-ADD/CardCompanyList',
  component: CardCompanyList,
} satisfies Meta<typeof CardCompanyList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
