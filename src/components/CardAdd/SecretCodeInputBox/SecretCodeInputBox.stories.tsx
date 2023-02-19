import CardSecretCodeInputBox from './CardSecretCodeInputBox';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'CardSecretCodeInputBox',
  component: CardSecretCodeInputBox,
} as Meta;

const Template: ComponentStory<typeof CardSecretCodeInputBox> = (args) => <CardSecretCodeInputBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
