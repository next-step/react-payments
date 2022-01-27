import React from 'react';
import { GROUP } from '../constants';
import PageTitle from './PageTitle';

export default {
  component: PageTitle,
  title: `${GROUP.COMPONENTS}/PageTitle`,
};

const Template = (args) => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '제목',
};
