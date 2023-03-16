import '@/styles/index.css';

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardInputWrapperPure } from './CardInputWrapper';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/components/CardInputWrapper',
  component: CardInputWrapperPure,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardInputWrapperPure>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardInputWrapperPure> = (args) => {
  return <CardInputWrapperPure {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  header: 'header',
  children: 'children',
};
