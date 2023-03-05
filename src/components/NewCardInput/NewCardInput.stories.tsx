import { ComponentMeta, ComponentStory } from '@storybook/react';
import '../../styles.css';
import { useState } from 'react';
import CardInput from './NewCardInput';

export default {
  title: 'CardInput',
  component: CardInput,
} as ComponentMeta<typeof CardInput>;

const Template: ComponentStory<typeof CardInput> = args => {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <CardInput
      {...args}
      inputCount={value.length}
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
