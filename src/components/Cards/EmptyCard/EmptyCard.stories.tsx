import { ComponentMeta, ComponentStory } from '@storybook/react';
import EmptyCard from '.';

export default {
  title: 'EmptyCard',
  component: EmptyCard,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof EmptyCard>;

const Template: ComponentStory<typeof EmptyCard> = args => (
  <EmptyCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  onClick: () => {},
};
