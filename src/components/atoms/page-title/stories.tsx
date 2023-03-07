import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import PageTitle from './index';

export default {
  title: 'Atoms/PageTitle',
  component: PageTitle,
  parameters: {
    layout: 'top'
  }
} as ComponentMeta<typeof PageTitle>;
const Template: ComponentStory<typeof PageTitle> = (args) => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '페이지 제목'
};
