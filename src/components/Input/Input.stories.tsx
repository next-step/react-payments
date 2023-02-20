import { ComponentMeta, ComponentStory } from '@storybook/react';
import '../../styles.css';
import { useState } from 'react';
import Input from '.';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => {
  const [inputCount, setInputCount] = useState(0);
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setInputCount(e.target.value.length);
  };

  return (
    <Input
      {...args}
      inputCount={inputCount}
      value={value}
      onChange={onChange}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
  widthSize: 'lg',
  textAlign: 'center',
  hasInputCount: false,
  inputCount: 0,
};
