import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Payments/Card/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: {
      name: '카드 이름',
      type: { name: 'string', required: true },
      description: '카드 이름',
    },
    owner: {
      name: '소유자 이름',
      type: { name: 'string', required: true },
      description: '소유자 이름',
    },
    alias: {
      name: '카드 별칭',
      type: { name: 'string', required: false },
      description: '소유자가 정의한 카드 별칭',
    },
    numbers: {
      name: '카드 번호',
      type: { name: 'array', required: true },
      description: '카드 번호 4자리 숫자',
    },
    expiredMonth: {
      name: '만료 월',
      type: { name: 'string', required: false },
      description: '카드 만료 월',
    },
    expiredYear: {
      name: '만료 연도',
      type: { name: 'string', required: false },
      description: '카드 만료 연도',
    },
    cvc: {
      name: 'CVC',
      type: { name: 'string', required: false },
      description: 'CVC 카드 뒷면 3자리 숫자',
    },
    password: {
      name: '비밀번호',
      type: { name: 'string', required: false },
      description: '비밀번호 ',
    },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const 클린카드 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
클린카드.args = {
  card: {
    name: '하나카드',
    owner: '홍길동',
    alias: '나의 하나카드',
    numbers: ['1234', '4567', '7890', '0123'],
    expiredMonth: '10',
    expiredYear: '23',
  },
};
