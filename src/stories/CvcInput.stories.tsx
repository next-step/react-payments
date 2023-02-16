import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CvcInput } from '../components/CvcInput';

export default {
  title: 'Example/CvcInput',
  component: CvcInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CvcInput>;

const Template: ComponentStory<typeof CvcInput> = () => <CvcInput />;

export const Default = Template.bind({});
