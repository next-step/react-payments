import { ComponentMeta, ComponentStory } from '@storybook/react';

import Text from '.';

export default {
  title: 'Components/UI/Text',
  component: Text,
  argTypes: {
    size: {
      options: [...Array.from({ length: 9 }, (_, i) => i + 1)],
      control: { type: 'radio' },
    },
    color: {
      options: ['danger', 'default'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: '3',
  children: 'TEXT',
};
