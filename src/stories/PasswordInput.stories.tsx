import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PinInput } from '../components/PinInput';

export default {
  title: 'Example/PinInput',
  component: PinInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PinInput>;

const Template: ComponentStory<typeof PinInput> = () => <PinInput />;

export const Default = Template.bind({});
