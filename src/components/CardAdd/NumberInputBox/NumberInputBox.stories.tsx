import type { ComponentStory, Meta } from '@storybook/react';

import NumberInputBox from './NumberInputBox';

export default {
  title: 'NumberInputBox',
  component: NumberInputBox,
} as Meta;

const Template: ComponentStory<typeof NumberInputBox> = (args) => <NumberInputBox {...args} />;

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
