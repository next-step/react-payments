import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import CardPasswordInput from './CardPasswordInput';

export default {
  title: 'CardPasswordInput',
  component: CardPasswordInput,
} as ComponentMeta<typeof CardPasswordInput>;

const Template: ComponentStory<typeof CardPasswordInput> = args => {
  const [firstPassword, setFirstPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');

  const handleFirstPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstPassword(e.target.value);
  };

  const handleSecondPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondPassword(e.target.value);
  };
  return (
    <CardPasswordInput
      {...args}
      firstPasswordProps={{
        value: firstPassword,
        onChange: handleFirstPassword,
      }}
      secondPasswordProps={{
        value: secondPassword,
        onChange: handleSecondPassword,
      }}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Label',
  firstPasswordProps: {
    value: '',
    onChange: () => {},
  },
  secondPasswordProps: {
    value: '',
    onChange: () => {},
  },
};
