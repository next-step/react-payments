import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withReactContext } from 'storybook-react-context';
import CardEdit from './CardEdit';

export default {
  title: 'Payments/Pages/CardEdit',
  component: CardEdit,
} as ComponentMeta<typeof CardEdit>;

const Template: ComponentStory<typeof CardEdit> = () => {
  return <CardEdit />;
};

export const Default = Template.bind({});
