import { ComponentMeta, ComponentStory } from '@storybook/react';
import '../../styles.css';
import Input from '.';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
  widthSize: 'lg',
  textAlign: 'center',
};
