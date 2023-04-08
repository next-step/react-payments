import React from 'react';
import { Button } from './Button';

export default {
  title: 'payments-example/Button',
  component: Button,
  argTypes: {}
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Default',
  onClick: () => console.log("I'm Default Btn")
};
