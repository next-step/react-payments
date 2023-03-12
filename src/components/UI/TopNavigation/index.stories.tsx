import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import TopNavigation from '.';

export default {
  title: 'Components/UI/TopNavigation',
  component: TopNavigation,
  decorators: [withRouter],
} as ComponentMeta<typeof TopNavigation>;

const Template: ComponentStory<typeof TopNavigation> = () => <TopNavigation />;

export const Default = Template.bind({});
Default.args = {
  children: 'TopNavigation',
};
