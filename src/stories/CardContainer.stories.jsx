import React from 'react';
import { CardContainer } from './CardContainer';

export default {
  title: 'payments-example/CardContainer',
  component: CardContainer,
  argTypes: {}
};

const Template = (args) => <CardContainer {...args} />;

export const Default = Template.bind({});

Default.args = {};
