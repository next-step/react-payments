import { ComponentMeta, ComponentStory } from '@storybook/react';
import '../../styles.css';
import TextButton from '.';

export default {
  title: 'TextButton',
  component: TextButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = args => (
  <TextButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: 'Text',
};
