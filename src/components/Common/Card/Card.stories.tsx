import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Common/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const EmptyCard = Template.bind({});
EmptyCard.args = {
  cardNumber: {
    cardNumber1: '',
    cardNumber2: '',
    cardNumber3: '',
    cardNumber4: '',
  },
  expiration: {
    month: '',
    year: '',
  },
  cardOwner: '',
  cardCompany: '',
  size: 'sm',
  isEmpty: true,
};
export const DefaultCard = Template.bind({});
DefaultCard.args = {
  cardNumber: {
    cardNumber1: '',
    cardNumber2: '',
    cardNumber3: '',
    cardNumber4: '',
  },
  expiration: {
    month: '',
    year: '',
  },
  cardOwner: '',
  cardCompany: '',
  size: 'sm',
  isEmpty: false,
};

export const LargeCard = Template.bind({});
LargeCard.args = {
  cardNumber: {
    cardNumber1: '',
    cardNumber2: '',
    cardNumber3: '',
    cardNumber4: '',
  },
  expiration: {
    month: '',
    year: '',
  },
  cardOwner: '',
  cardCompany: '',
  size: 'lg',
  isEmpty: false,
};
