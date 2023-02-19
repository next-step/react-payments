import { ComponentMeta, ComponentStory } from '@storybook/react';

import CreditCard from '.';

export default {
  title: 'Components/CreditCard',
  component: CreditCard,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CreditCard>;

const Template: ComponentStory<typeof CreditCard> = () => (
  <CreditCard
    cardInfo={{
      CARD_NUMBERS: {
        1: '1234',
        2: '1234',
        3: '****',
        4: '****',
      },
      OWNER_NAME: 'Dahye',
      EXPIRE_DATE: {
        month: '11',
        year: '25',
      },
    }}
  />
);

export const Default = Template.bind({});
