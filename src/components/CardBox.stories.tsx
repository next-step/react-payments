import type { Meta, StoryObj } from '@storybook/react';

import CardBox from './CardBox';

const CardContainer = () => {
  return (
    <CardBox>
      <p>+</p>
    </CardBox>
  );
};

const meta = {
  title: 'CARD/Card',
  component: CardContainer,
} satisfies Meta<typeof CardContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {};
