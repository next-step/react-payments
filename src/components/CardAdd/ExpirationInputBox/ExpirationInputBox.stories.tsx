import type { ComponentStory, Meta } from '@storybook/react';

import ExpirationInputBox from './ExpirationInputBox';

export default {
  title: 'ExpirationInputBox',
  component: ExpirationInputBox,
} as Meta;

const Template: ComponentStory<typeof ExpirationInputBox> = () => <ExpirationInputBox />;

const cardExpiration = {
  month: '12',
  year: '26',
};

export const Default = Template.bind({});
Default.args = {
  cardExpiration,
};
