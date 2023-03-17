import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardInfoInputElement } from './CardInfoInputElement';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CardCreator/components/CardInfoInputElement',
  component: CardInfoInputElement,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardInfoInputElement>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardInfoInputElement> = (args) => {
  return <CardInfoInputElement {...args} />;
};

export const Primary = Template.bind({});
export const ErrorSituation = Template.bind({});

Primary.args = {};

ErrorSituation.args = {
  error: {
    isError: true,
    message: 'errorMessage',
  },
};
