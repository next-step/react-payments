import React from 'react';
import ToNext from './ToNext';

export default {
  component: ToNext,
  title: 'ToNext',
};

const Template = (args) => <ToNext {...args} />;

export const Default = Template.bind({});
Default.args = {
  nextStatus: 'list',
};
