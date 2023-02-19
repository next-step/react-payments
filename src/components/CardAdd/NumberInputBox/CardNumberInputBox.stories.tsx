import CardNumberInputBox from './CardNumberInputBox';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'CardNumberInputBox',
  component: CardNumberInputBox,
} as Meta;

const Template: ComponentStory<typeof CardNumberInputBox> = (args) => <CardNumberInputBox {...args} />;

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
