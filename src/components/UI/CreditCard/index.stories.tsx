import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardVariant } from '../Card';
import CreditCard from '.';

export default {
  title: 'Components/UI/CreditCard',
  component: CreditCard,
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
    variant: {
      options: [...Object.keys(CardVariant)],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof CreditCard>;

const Template: ComponentStory<typeof CreditCard> = (args) => (
  <CreditCard {...args} />
);
export const Default = Template.bind({});

const MOCK_CARD_INFO = {
  CARD_NUMBERS: {
    1: '1111',
    2: '1111',
    3: '1111',
    4: '1111',
  },
  OWNER_NAME: { val: 'Dahye' },
  EXPIRE_DATE: { month: '10', year: '66' },
};

export const SmallCard = Template.bind({});
SmallCard.args = {
  size: 'small',
  cardInfo: MOCK_CARD_INFO,
};

export const WithCardInfo = Template.bind({});
WithCardInfo.args = {
  cardInfo: MOCK_CARD_INFO,
};
