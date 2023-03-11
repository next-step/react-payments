import type { ComponentStory, Meta } from '@storybook/react';

import CardSelectButton from './CardSelectButton';

export default {
  title: 'CardSelectButton',
  component: CardSelectButton,
} as Meta;

const Template: ComponentStory<typeof CardSelectButton> = () => <CardSelectButton />;

export const Default = Template.bind({});
Default.args = {};
