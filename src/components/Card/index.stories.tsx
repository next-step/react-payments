import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from '.';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    backgrounds: {
      values: [
        { name: '포코 카드', value: '#e24141' },
        { name: '준 카드', value: '#547ce4' },
        { name: '공원 카드', value: '#73BC6D' },
        { name: '브랜 카드', value: '#DE59B9' },
        { name: '로이드 카드', value: '#04C09E' },
        { name: '도비 카드', value: '#E76E9A' },
        { name: '콜린 카드', value: '#F37D3B' },
        { name: '썬 카드', value: '#FBCD58' },
      ],
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const DefaultWithData = Template.bind({});
DefaultWithData.args = {
  cardNumber: ['1234', '1234', '2345', '4567'],
  expirationNumber: ['12', '24'],
  owner: 'Hong gil dong',
  cardName: '일반 카드',
};
