import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';
import CardBox from './CardBox';

import { CardNumberType, ExpirationDateType } from '../types/CardFormType';

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

type CardProps = {
  variant: 'big' | 'small';
  cardNumber: CardNumberType;
  ownerName: string;
  expirationDate: ExpirationDateType;
  cardCompany: string;
};

const CardContainer = (props: CardProps) => {
  return <Card {...props} />;
};

const meta: Meta<typeof CardContainer> = {
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
  decorators: [
    (Story) => (
      <CardBox>
        <Story />
      </CardBox>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: CardProps) => <CardContainer {...args} />;

export function Empty() {
  return <p>+</p>;
}

Default.args = {
  variant: 'small',
  cardNumber,
  ownerName: 'SoJeong',
  expirationDate,
  cardCompany: '포코',
};
