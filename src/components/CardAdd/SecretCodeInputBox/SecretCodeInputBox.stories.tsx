import SecretCodeInputBox from './SecretCodeInputBox';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'SecretCodeInputBox',
  component: SecretCodeInputBox,
} as Meta;

const Template: ComponentStory<typeof SecretCodeInputBox> = () => <SecretCodeInputBox />;

export const Default = Template.bind({});
Default.args = {};
