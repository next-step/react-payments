import React from 'react';
import RootContainer from './Root';

export default {
  component: RootContainer,
  title: 'RootContainer',
};

const Template = (args) => <RootContainer {...args} />;

export const Default = Template.bind({});
Default.args = {};
