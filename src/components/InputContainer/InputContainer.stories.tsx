import type { Meta, StoryObj } from '@storybook/react';
import InputContainer from './InputContainer';
import Input from '../Input/Input';

const meta: Meta<typeof InputContainer> = {
  component: InputContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputContainer>;

const Template: Story = {
  render: ({ label }) => {
    return (
      <InputContainer label={label}>
        <Input />
      </InputContainer>
    );
  },
};

export const WithTitle: Story = {
  ...Template,
  args: {
    label: '카드 번호',
  },
};

export const WithoutTitle: Story = {
  ...Template,
};

export const Password: Story = {
  args: {
    label: '비밀번호',
  },
  render: ({ label }) => {
    return (
      <InputContainer label={label}>
        <div style={{ display: 'flex', gap: 6, width: '30%' }}>
          <Input className='w-15' type='password' />
          <Input className='w-15' type='password' />
          <Input className='w-15' type='password' />
          <Input className='w-15' type='password' />
        </div>
      </InputContainer>
    );
  },
};
