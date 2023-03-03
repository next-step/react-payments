import type { ComponentMeta } from '@storybook/react';
import Card from '../Card';

export default {
  title: 'Common/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const DefaultCard = (
  <Card
    size="sm"
    cardCompany=""
    cardOwner={''}
    cardNumber={{
      cardNumber1: '',
      cardNumber2: '',
      cardNumber3: '',
      cardNumber4: '',
    }}
    expiration={{
      year: '',
      month: '',
    }}
  />
);
