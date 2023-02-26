import type { ComponentStory, Meta } from '@storybook/react';

import Card from './Card';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}>버튼</Card>;

export const Default = Template.bind({});
Default.args = {
  type: 'big',
  cardNumber: { num1: '1234', num2: '5678', num3: '1234', num4: '5678' },
  cardExpiration: { month: '12', year: '25' },
  selectedCard: { name: '은규', color: '#FBCD58' },
};

export const 별칭포함카드 = Template.bind({});
별칭포함카드.args = {
  type: 'big',
  isShowAlias: true,
  cardNumber: { num1: '1234', num2: '5678', num3: '1234', num4: '5678' },
  cardExpiration: { month: '12', year: '25' },
  selectedCard: { name: '은규', color: '#FBCD58' },
  cardAlias: '승완체크카드',
};
