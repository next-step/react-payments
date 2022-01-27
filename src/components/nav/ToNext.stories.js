import React from 'react';
import { GROUP } from '../../constants';
import ToNext from './ToNext';

export default {
  component: ToNext,
  title: `${GROUP.NAV}/ToNext`,
};

const Template = (args) => <ToNext {...args} />;

export const Default = Template.bind({});
Default.args = {
  nextStatus: 'list',
};
