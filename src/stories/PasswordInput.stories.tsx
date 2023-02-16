import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PasswordInput } from '../components/PasswordInput';

export default {
  title: 'Example/PasswordInput',
  component: PasswordInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = () => <PasswordInput />;

export const Default = Template.bind({});
