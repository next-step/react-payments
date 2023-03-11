import type { ComponentStory, Meta } from '@storybook/react';

import OwnerNameInputBox from './OwnerNameInputBox';

export default {
  title: 'OwnerNameInputBox',
  component: OwnerNameInputBox,
} as Meta;

const Template: ComponentStory<typeof OwnerNameInputBox> = () => <OwnerNameInputBox />;

const cardOwnerName = '승완';

export const Default = Template.bind({});
Default.args = {
  cardOwnerName,
};
