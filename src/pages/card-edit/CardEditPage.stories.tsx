import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardEdit from './CardEdit';

export default {
  title: 'Payments/Pages/CardEdit',
  component: CardEdit,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CardEdit>;

const Template: ComponentStory<typeof CardEdit> = () => {
  return <CardEdit />;
};

export const Default = Template.bind({});
