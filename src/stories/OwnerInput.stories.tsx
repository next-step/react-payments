import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OwnerInput } from '../components/OwnerInput';

export default {
  title: 'Example/OwnerInput',
  component: OwnerInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof OwnerInput>;

const Template: ComponentStory<typeof OwnerInput> = () => <OwnerInput />;

export const Default = Template.bind({});
