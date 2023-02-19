import CardSelectButton from './CardSelectButton';

import type { ComponentStory, Meta } from '@storybook/react';

export default {
  title: 'CardSelectButton',
  component: CardSelectButton,
} as Meta;

const Template: ComponentStory<typeof CardSelectButton> = (args) => <CardSelectButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
