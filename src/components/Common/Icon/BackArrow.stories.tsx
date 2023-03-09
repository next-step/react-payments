import { ComponentMeta, ComponentStory } from '@storybook/react';
import BackArrow from './BackArrow';

export default {
  title: 'Common/Icon/BackArrow',
  component: BackArrow,
} as ComponentMeta<typeof BackArrow>;

const Template: ComponentStory<typeof BackArrow> = () => <BackArrow />;

export const DefaultChip = Template.bind({});
