import type { ComponentStory, Meta } from '@storybook/react';

import CardBox from './CardBox';

export default {
  title: 'CardBox',
  component: CardBox,
} as Meta;

const Template: ComponentStory<typeof CardBox> = (args) => <CardBox {...args} />;

const cardNumber = {
  num1: '1234',
  num2: '5678',
  num3: '1912',
  num4: '1244',
};

const cardExpiration = {
  month: '12',
  year: '24',
};

const cardOwnerName = '승완';

const selectedCard = {
  name: '은규',
  color: '#FBCD58',
};

export const 은규카드 = Template.bind({});
은규카드.args = {
  cardNumber,
  cardExpiration,
  cardOwnerName,
  selectedCard,
};
