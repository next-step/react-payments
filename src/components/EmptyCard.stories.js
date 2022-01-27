import React from 'react';
import { GROUP } from '../constants';
import EmptyCard from './EmptyCard';

export default {
  component: EmptyCard,
  title: `${GROUP.COMPONENTS}/EmptyCard`,
};

const Template = (args) => <EmptyCard {...args} />;

export const Default = Template.bind({});
