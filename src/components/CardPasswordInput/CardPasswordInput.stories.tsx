import { ComponentMeta, ComponentStory } from '@storybook/react';
import '../../styles.css';
import { useState } from 'react';
import CardPasswordInput from '.';

export default {
  title: 'CardPasswordInput',
  component: CardPasswordInput,
} as ComponentMeta<typeof CardPasswordInput>;

const Template: ComponentStory<typeof CardPasswordInput> = args => {
  const [password0, setPassword0] = useState('');
  const [password1, setPassword1] = useState('');
  const password0Handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword0(e.target.value);
  };
  const password1Handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword1(e.target.value);
  };

  return (
    <CardPasswordInput
      {...args}
      password0={password0}
      password0Handler={password0Handler}
      password1={password1}
      password1Handler={password1Handler}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
  password0: '',
  password1: '',
  password0Handler: () => {},
  password1Handler: () => {},
};
