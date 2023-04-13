import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardEdit from './CardEdit';
import { CardContextProvider } from '../../context/CardContext';

export default {
  title: 'Payments/Pages/CardEdit',
  component: CardEdit,
} as ComponentMeta<typeof CardEdit>;

const Template: ComponentStory<typeof CardEdit> = () => {
  return (
    <CardContextProvider>
      <CardEdit />
    </CardContextProvider>
  );
};

export const Default = Template.bind({});
