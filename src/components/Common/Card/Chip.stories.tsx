import { ComponentMeta, ComponentStory } from '@storybook/react';
import Chip from './Chip';

export default {
  title: 'Common/CardChip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = args => <Chip {...args} />;

export const DefaultChip = Template.bind({});
