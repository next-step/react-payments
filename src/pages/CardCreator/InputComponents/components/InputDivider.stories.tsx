import '@/styles/index.css';

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputDivider } from './InputDivider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/components/InputDivider',
  component: InputDivider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    className: { control: false },
  },
} as ComponentMeta<typeof InputDivider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputDivider> = (args) => {
  return <InputDivider {...args} />;
};

export const NumberInputDivider = Template.bind({});

NumberInputDivider.args = {
  hiding: false,
  children: '-',
};

export const ExpireDateDivider = Template.bind({});

ExpireDateDivider.args = {
  hiding: false,
  children: '/',
};
