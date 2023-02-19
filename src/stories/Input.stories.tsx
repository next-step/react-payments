import { Story } from '@storybook/react';
import { Input } from 'components';
import { InputProps } from 'components/Input';
import { useRef } from 'react';

export default {
  title: 'Input',
  component: Input,
};

export const Template: Story<InputProps> = (args) => {
  const ref = useRef<HTMLInputElement>(null);

  return <Input {...args} ref={ref} />;
};
Template.args = { value: 'Sample', textAlign: 'center' };
Template.storyName = 'Playground';
