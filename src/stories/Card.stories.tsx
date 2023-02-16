import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '../components/Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    cardName: {
      name: 'cardName',
      type: { name: 'string', required: true },
      description: '카드 이름',
    },
    owner: {
      name: 'owner',
      type: { name: 'string', required: true },
      description: '소유자 이름',
    },
    alias: {
      name: 'alias',
      type: { name: 'string', required: false },
      description: '소유자가 정의한 카드 별칭',
    },
    numbers: {
      name: 'numbers',
      type: { name: 'array', required: true },
      description: '카드 번호 4자리 숫자',
    },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const 클린카드 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
클린카드.args = {
  cardName: '복카드',
  owner: '김배민',
  alias: '배민복카드',
  numbers: ['1111', '2222', '3333', '4444'],
  expiredMonth: 10,
  expiredYear: 23,
  password: '1234',
  cvc: '333',
};
