import SecretCodeInputBox from './SecretCodeInputBox';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'SecretCodeInputBox',
  component: SecretCodeInputBox,
} as Meta;

const Template: ComponentStory<typeof SecretCodeInputBox> = (args) => <SecretCodeInputBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
