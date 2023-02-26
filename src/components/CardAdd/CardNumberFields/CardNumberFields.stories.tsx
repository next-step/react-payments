import type { ComponentStory, Meta } from '@storybook/react';

import CardNumberFields from './CardNumberFields';

export default {
  title: 'CardNumberFields',
  component: CardNumberFields,
} as Meta;

const Template: ComponentStory<typeof CardNumberFields> = (args) => <CardNumberFields {...args} />;

const cardNumber = {
  num1: '1234',
  num2: '5678',
  num3: '1912',
  num4: '1244',
};

export const Default = Template.bind({});
Default.args = {
  cardNumber,
};
