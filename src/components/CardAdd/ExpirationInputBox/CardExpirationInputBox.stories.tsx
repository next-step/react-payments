import CardExpirationInputBox from './CardExpirationInputBox';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'CardExpirationInputBox',
  component: CardExpirationInputBox,
} as Meta;

const Template: ComponentStory<typeof CardExpirationInputBox> = (args) => <CardExpirationInputBox {...args} />;

const cardExpiration = {
  month: '12',
  year: '26',
};

export const Default = Template.bind({});
Default.args = {
  cardExpiration,
};
