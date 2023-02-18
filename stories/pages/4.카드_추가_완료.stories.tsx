import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { 카드_추가_완료 } from './4.카드_추가_완료';

export default {
  title: '페이지/4.카드_추가_완료',
  component: 카드_추가_완료,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof 카드_추가_완료>;

const Template: ComponentStory<typeof 카드_추가_완료> = () => (
  <카드_추가_완료 />
);

export const Default = Template.bind({});
