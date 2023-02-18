import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  cardNumber: '1234567890123456',
  expirationMonth: '12',
  expirationYear: '23',
  ownerName: '홍길동',
  cardName: '신한카드',
  cardColor: 'primary',
};
