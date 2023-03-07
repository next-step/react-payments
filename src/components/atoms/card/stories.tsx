import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Card from './index';

export default {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  }
} as ComponentMeta<typeof Card>;
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

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
