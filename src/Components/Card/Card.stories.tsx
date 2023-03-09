import { type Story } from '@storybook/react';
import Card, { type Props } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template: Story<Props> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  issuer: '포코카드',
  number: ['1111', '2222', '3333', '4444'],
  owner: '김동호',
  expiration: {
    month: '04',
    year: '26',
  },
};
