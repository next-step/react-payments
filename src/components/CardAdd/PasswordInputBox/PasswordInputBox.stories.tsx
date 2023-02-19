import type { ComponentStory, Meta } from '@storybook/react';

import PasswordInputBox from './PasswordInputBox';

export default {
  title: 'PasswordInputBox',
  component: PasswordInputBox,
} as Meta;

const Template: ComponentStory<typeof PasswordInputBox> = (args) => <PasswordInputBox {...args} />;

const cardPassword = {
  num1: '2',
  num2: '4',
};

export const Default = Template.bind({});
Default.args = {
  cardPassword,
};
