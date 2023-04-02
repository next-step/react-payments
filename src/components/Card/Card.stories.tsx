import React, { ReactElement } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Empty = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  cardCompany: {
    theme: 'blue',
    name: 'companyName',
  },
  cardNumbers: [
    {
      value: '1234',
    },
    {
      value: '1234',
    },
    {
      type: 'password',
      value: '1234',
    },
    {
      type: 'password',
      value: '1234',
    },
  ],
  cardOwnerName: '',
  cardExpireDate: ['12', '32'],
  cardNickname: 'nickname',
};

Secondary.args = {
  cardCompany: {
    theme: 'green',
    name: 'companyName',
  },
  cardNumbers: [
    {
      value: '1234',
    },
    {
      value: '1234',
    },
    {
      type: 'password',
      value: '1234',
    },
    {
      type: 'password',
      value: '1234',
    },
  ],
  cardOwnerName: '',
  cardExpireDate: ['12', '32'],
  cardNickname: 'nickname',
  additionalBottomElement: 'bottomElement' as unknown as ReactElement<string>,
  additionalIcon: 'icon' as unknown as ReactElement<string>,
};

Empty.args = {};
