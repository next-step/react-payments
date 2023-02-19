import CardPasswordInputBox from './CardPasswordInputBox';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'CardPasswordInputBox',
  component: CardPasswordInputBox,
} as Meta;

const Template: ComponentStory<typeof CardPasswordInputBox> = (args) => <CardPasswordInputBox {...args} />;

const cardPassword = {
  num1: '2',
  num2: '4',
};

export const Default = Template.bind({});
Default.args = {
  cardPassword,
};
