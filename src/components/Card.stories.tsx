import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';
import CardBox from './CardBox';

const cardNumber = {
  firstNumber: '1111',
  secondNumber: '1111',
  thirdNumber: '1111',
  fourthNumber: '1111',
};

const expirationDate = {
  month: '12',
  year: '23',
};

const CardContainer = (props: typeof Card) => {
  return (
    <CardBox>
      <Card {...props} />
    </CardBox>
  );
};

const meta = {
  title: 'CARD/Card',
  component: CardContainer,
  argTypes: {
    variant: {
      options: ['small', 'big'],
      control: { type: 'radio' },
    },
    expirationDate: {
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof CardContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'small',
    cardNumber,
    ownerName: 'SoJeong',
    expirationDate,
    cardCompany: '포코',
  },
};
