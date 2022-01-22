import { ComponentStory, Meta } from '@storybook/react';
import { INIT_CARD_STATE } from '@/constants';

import { Card } from '@/components/Card';

export default {
  title: 'components/Card',
  component: Card,
  argTypes: {
    expiryDate: {
      control: {
        type: 'array',
      },
    },
  },
} as Meta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return <Card {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  cardNumber: INIT_CARD_STATE['cardNumber'],
  expiryDate: INIT_CARD_STATE['expiryDate'],
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: 'small',
  cardNumber: [1111, 2222, 3333, 4444],
  expiryDate: ['01', 24],
  owner: 'LIM',
  company: 'woori',
  bgColor: '#baefe6',
};

export const Big = Template.bind({});
Big.args = {
  ...Default.args,
  size: 'big',
  cardNumber: [1111, 2222, 3333, 4444],
  expiryDate: ['08', 24],
  owner: 'KIM',
  company: 'samsung',
  bgColor: '#c1d7f9',
};
