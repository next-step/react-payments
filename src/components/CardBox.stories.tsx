import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardBox } from './index';

export default {
  title: 'Payments/CardBox',
  component: CardBox,
  parameters: {
    layout: 'centered',
  }
} as ComponentMeta<typeof CardBox>;
const Template: ComponentStory<typeof CardBox> = (args) => <CardBox {...args} />;

const defaultData = {
  cardCompany: '클린카드',
  cardNumber: '1234123412341234',
  cardHolder: 'TEST',
  expiredDate: '1223',
  type: 'small'
};

export const Small = Template.bind({});
Small.args = {
  ...defaultData,
};

export const Big = Template.bind({});
Big.args = {
  ...defaultData,
  type: 'big',
};