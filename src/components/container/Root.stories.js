import React from 'react';
import { GROUP } from '../../constants';
import RootContainer from './Root';

export default {
  component: RootContainer,
  title: `${GROUP.CONTAINER}/RootContainer`,
};

const Template = (args) => <RootContainer {...args} />;

export const Default = Template.bind({});
Default.args = {};
