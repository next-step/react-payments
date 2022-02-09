import React from 'react';
import { AppContext } from '../AppContext';
import { GROUP } from '../constants';
import Card from './Card';

export default {
  component: Card,
  title: `${GROUP.COMPONENTS}/Card`,
  argTypes: {
    type: {
      name: 'Type',
      options: ['empty', 'small', 'big'],
      control: { type: 'select' },
    },
    color: {
      name: 'Color',
      control: { type: 'color' },
    },
  },
};

const inputValues = {
  example: {
    type: 'small',
    cardNumbers: ['1234', '1234', '1234', '1234'],
    expirationMonth: '12',
    expirationYear: '34',
    cardHolder: '카드소유주',
    cvc: '123',
    passwords: ['1', '2'],
    companyName: '회사명',
    color: '',
  },
  empty: {
    type: 'empty',
    cardNumbers: ['', '', '', ''],
    expirationMonth: '',
    expirationYear: '',
    cardHolder: '',
    cvc: '',
    passwords: ['', ''],
    companyName: '',
    color: '',
  },
};

const Template = ({ type, color }) => {
  const inputCard = type === 'empty' ? inputValues.empty : inputValues.example;
  inputCard.color = color;

  return <Card type={type} card={inputCard} />;
};

export const Default = Template.bind({});
Default.args = {
  type: 'empty',
  color: '#e5e5e5',
};
