import type { ComponentStory, Meta } from '@storybook/react';

import CardSelectModal from './CardSelectModal';

export default {
  title: 'CardSelectModal',
  component: CardSelectModal,
} as Meta;

const Template: ComponentStory<typeof CardSelectModal> = (args) => <CardSelectModal {...args} />;

export const Default = Template.bind({});
Default.args = {};
