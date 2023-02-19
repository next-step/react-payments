import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputCvc from '../components/form/InputCvc';

export default {
  title: 'Form',
  component: InputCvc,
} as ComponentMeta<typeof InputCvc>;

const Template: ComponentStory<typeof InputCvc> = (args) => (
  <InputCvc {...args} />
);

export const Cvc = Template.bind({});
