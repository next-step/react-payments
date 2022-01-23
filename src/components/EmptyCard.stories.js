import React from 'react';
import EmptyCard from './EmptyCard';

export default {
  component: EmptyCard,
  title: 'EmptyCard',
};

const Template = (args) => <EmptyCard {...args} />;

export const Default = Template.bind({});
