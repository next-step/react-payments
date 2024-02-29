import { INPUT } from './input.constant';
import { InputProps, InputType } from './input.type';
import {
  DefaultInput,
  InputBox,
  InputContainer,
  InputTitle,
} from './components';

const InputFactory = ({ type, ...rest }: InputProps) => {
  const getInput = (inputType: InputType) => {
    switch (inputType) {
      case INPUT.FACTORY.TEXT.TYPE:
      case INPUT.FACTORY.PASSWORD.TYPE: {
        return <DefaultInput type={inputType} {...rest} />;
      }

      default: {
        throw new Error(`${inputType} 존재하지 않는 inputType입니다.`);
      }
    }
  };

  return getInput(type);
};

export const Input = Object.assign(InputFactory, {
  Container: InputContainer,
  Title: InputTitle,
  Box: InputBox,
});
