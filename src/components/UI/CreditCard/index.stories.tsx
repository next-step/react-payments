import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CardVariant } from '../Card';
import CreditCard, { DefaultCardInfo } from '.';

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

export const SmallCard = Template.bind({});
SmallCard.args = {
  size: 'small',
  cardInfo: DefaultCardInfo,
};

export const WithCardInfo = Template.bind({});
WithCardInfo.args = {
  cardInfo: DefaultCardInfo,
};
