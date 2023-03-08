import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CompanyList from 'components/CompanyList/CompanyList';
import CompanyListProps from 'components/CompanyList/CompanyList';

export default {
  title: 'CompanyList',
  component: CompanyList,
} as ComponentMeta<typeof CompanyListProps>;

const Template: ComponentStory<typeof CompanyListProps> = (args) => <CompanyListProps {...args} />;

export const Default = Template.bind({});
Default.args = {};
