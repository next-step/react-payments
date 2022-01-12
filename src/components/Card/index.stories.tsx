import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './index';

export default {
  title: 'Components/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const EmptyCard = Template.bind({});
EmptyCard.args = {
  cardName: '',
  expiredMonth: '',
  expiredYear: '',
};

export const SmallCard = Template.bind({});
SmallCard.args = {
  cardName: '청춘대로',
  userName: '김민정',
  expiredMonth: '6',
  expiredYear: '26',
  cardNumber: '123123123123',
};
