import type { ComponentStory, Meta } from '@storybook/react';

import CardBox from './CardBox';

export default {
  title: 'CardBox',
  component: CardBox,
} as Meta;

const Template: ComponentStory<typeof CardBox> = () => <CardBox />;

export const 기본카드 = Template.bind({});
기본카드.args = {};
