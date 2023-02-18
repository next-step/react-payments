import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { TopNavigation } from '.';

export default {
  title: 'Components/TopNavigation',
  component: TopNavigation,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TopNavigation>;

const Template: ComponentStory<typeof TopNavigation> = () => <TopNavigation />;

export const Default = Template.bind({});
