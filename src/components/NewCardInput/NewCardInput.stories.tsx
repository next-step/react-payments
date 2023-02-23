import { ComponentMeta, ComponentStory } from '@storybook/react';
import '../../styles.css';
import { useState } from 'react';
import CardInput from './NewCardInput';

export default {
  title: 'CardInput',
  component: CardInput,
} as ComponentMeta<typeof CardInput>;

const Template: ComponentStory<typeof CardInput> = args => {
  const [inputCount, setInputCount] = useState(0);
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setInputCount(e.target.value.length);
  };

  return (
    <CardInput
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
  inputLimitCount: 0,
  inputCount: 0,
};
