import CardSelectModal from './CardSelectModal';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'CardSelectModal',
  component: CardSelectModal,
} as Meta;

const Template: ComponentStory<typeof CardSelectModal> = (args) => <CardSelectModal {...args} />;

export const Default = Template.bind({});
Default.args = {};
