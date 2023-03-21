import { ComponentMeta, ComponentStory } from '@storybook/react';
import Circle from './Circle';

export default {
  title: 'Common/Icon/Circle',
  component: Circle,
} as ComponentMeta<typeof Circle>;

const Template: ComponentStory<typeof Circle> = args => <Circle {...args} />;

export const DefaultCircle = Template.bind({});
DefaultCircle.argTypes = {
  fill: {
    control: {
      type: 'color',
    },
  },
};
