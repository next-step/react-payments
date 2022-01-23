import React from 'react';
import PageTitle from './PageTitle';

export default {
  component: PageTitle,
  title: 'PageTitle',
};

const Template = (args) => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '제목',
};
