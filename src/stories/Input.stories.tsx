import { useRef } from 'react';
import { Story } from '@storybook/react';

import { Input } from 'components/common';
import type { InputProps } from 'components/common/Input';

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
