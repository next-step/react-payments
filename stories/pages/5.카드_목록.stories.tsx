import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { 카드_목록 } from './5.카드_목록';

export default {
  title: '페이지/4.카드_목록',
  component: 카드_목록,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof 카드_목록>;

const Template: ComponentStory<typeof 카드_목록> = () => <카드_목록 />;

export const Default = Template.bind({});
