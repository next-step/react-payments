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
  userName: '',
  expiredMonth: '',
  expiredYear: '',
  cardNum: {
    first: '',
    second: '',
    third: '',
    forth: '',
  },
};

export const SmallCard = Template.bind({});
SmallCard.args = {
  cardCompany: '청춘대로',
  userName: '김민정',
  expiredMonth: '6',
  expiredYear: '26',
  cardNum: {
    first: '1243',
    second: '3455',
    third: '1235',
    forth: '4533',
  },
};

export const BigCard = Template.bind({});
BigCard.args = {
  size: 'big',
  cardCompany: '노리체크',
  userName: '김민정',
  expiredMonth: '6',
  expiredYear: '26',
  cardNum: {
    first: '1243',
    second: '3455',
    third: '1235',
    forth: '4533',
  },
};
