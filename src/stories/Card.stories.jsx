import React from 'react';
import { Card } from './Card';

export default {
  title: 'payments-example/Card',
  component: Card,
  argTypes: {}
};

const Template = (args) => <Card {...args} />;

export const SmallCard = Template.bind({});

SmallCard.args = {
  size: 'small',
  cardInfo: {
    company: '토스카드',
    number: '1234-4565-7865-8888',
    owner: 'HYEWON',
    expiry: '11/24',
    nickname: '생활비',
    cvc: '564',
    password1: '2',
    password2: '7',
    backgroundColor: 'blue'
  }
};

export const BigCard = Template.bind({});

BigCard.args = {
  size: 'big',
  cardInfo: {
    company: '농협카드',
    number: '1234-4565-7865-8888',
    owner: 'HYEWON',
    expiry: '11/24',
    nickname: '생활비',
    cvc: '564',
    password1: '2',
    password2: '7',
    backgroundColor: 'skyblue'
  }
};
