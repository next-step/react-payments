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
  brand: '클린카드',
  cardNumber: '1234-1234-****-****',
  cardHolder: 'TEST',
  expiredDate: '12/23'
};

export const Small = Template.bind({});
Small.args = {
  ...defaultData,
  type: 'small'
};

export const Big = Template.bind({});
Big.args = {
  ...defaultData,
  type: 'big'
};