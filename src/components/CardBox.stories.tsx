import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardBox } from './index';

export default {
  title: 'Payments/CardBox',
  component: CardBox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  }
} as ComponentMeta<typeof CardBox>;
const Template: ComponentStory<typeof CardBox> = (args) => <CardBox {...args} />;

const defaultData = {
  cardCompany: '클린카드',
  cardNumber: '1111 - 2222 - oooo - oooo',
  userName: 'YUJO',
  expiredDate: '12 / 23',
};

export const Empty = Template.bind({});
Empty.args = {
  type: 'empty',
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