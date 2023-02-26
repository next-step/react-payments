import '@/styles/button.css';
import '@/styles/card.css';
import '@/styles/index.css';
import '@/styles/input.css';

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';

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
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  cardNumbers: [
    {
      isHide: false,
      value: '1234',
    },
    {
      isHide: false,
      value: '1234',
    },
    {
      isHide: true,
      value: '1234',
    },
    {
      isHide: true,
      value: '1234',
    },
  ],
  ownerName: 'test',
  expireDates: ['12', '32'],
};
