import { Story } from '@storybook/react';
import { ComponentMeta } from '@storybook/react';

import InputContainer, { type Props } from '.';

export default {
  title: 'Components/InputContainer',
  component: InputContainer,
} as ComponentMeta<typeof InputContainer>;

const Template: Story<Props> = (args) => <InputContainer {...args} />;

export const Default = Template.bind({});

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  errorMessage: '카드번호는 숫자만 입력할 수 있습니다.',
};

export const Container = Template.bind({});
Container.args = {
  label: '카드번호',
  isError: true,
  errorMessage: '카드번호는 숫자만 입력할 수 있습니다.',
  children: (
    <>
      <input type="text" placeholder="1111" />
      <input type="text" placeholder="1111" />
      <input type="password" placeholder="****" />
      <input type="password" placeholder="****" />
    </>
  ),
};
