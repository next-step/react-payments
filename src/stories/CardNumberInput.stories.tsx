import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CardNumberInput } from '../components/CardNumberInput';

export default {
  title: 'Example/CardNumberInput',
  component: CardNumberInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CardNumberInput>;

const Template: ComponentStory<typeof CardNumberInput> = () => <CardNumberInput />;

export const Default = Template.bind({});
