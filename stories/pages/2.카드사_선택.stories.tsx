import { ComponentMeta, ComponentStory } from '@storybook/react';

import { 카드사_선택 } from './2.카드사_선택';

export default {
  title: '페이지/2.카드사_선택',
  component: 카드사_선택,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof 카드사_선택>;

const Template: ComponentStory<typeof 카드사_선택> = () => <카드사_선택 />;

export const Default = Template.bind({});
