import CardOwnerNameInputBox from './CardOwnerNameInputBox';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'CardOwnerNameInputBox',
  component: CardOwnerNameInputBox,
} as Meta;

const Template: ComponentStory<typeof CardOwnerNameInputBox> = (args) => <CardOwnerNameInputBox {...args} />;

const cardOwnerName = '승완';

export const Default = Template.bind({});
Default.args = {
  cardOwnerName,
};
