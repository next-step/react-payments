import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputTitle } from 'components/UI';
import { InputErrorMessage } from 'components/UI/Typography';
import { ERROR_MESSAGE } from 'utils/validation';

import Input from './index';
import { InputContainer } from './input.style';

export default {
  title: 'Components/Input',
  component: Input,
  control: {
    name: null,
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const BasicInput = Template.bind({});

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: 'text',
  isPassword: true,
};

export const InputWithLabel = () => {
  return (
    <InputContainer>
      <InputTitle>이름</InputTitle>
      <BasicInput type="text" placeholder="이름을 입력해주세요" width={25} />
    </InputContainer>
  );
};

export const InputWithErrorMessage = () => {
  return (
    <InputContainer>
      <InputTitle>이름</InputTitle>
      <div>
        <BasicInput type="text" placeholder="이름을 입력해주세요" width={25} />
      </div>
      <InputErrorMessage>{ERROR_MESSAGE.CARD_NUMBER}</InputErrorMessage>
    </InputContainer>
  );
};
