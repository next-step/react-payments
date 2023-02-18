import { ComponentMeta, ComponentStory } from '@storybook/react';

import { 카드추가_페이지 } from './1.카드추가_페이지';

export default {
  title: '페이지/1.카드추가_페이지',
  component: 카드추가_페이지,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof 카드추가_페이지>;

const Template: ComponentStory<typeof 카드추가_페이지> = () => (
  <카드추가_페이지 />
);

export const Default = Template.bind({});
