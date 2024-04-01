import { INPUT } from './input.constant';
import { InputFactoryProps } from './input.type';
import {
  DefaultInput,
  InputBox,
  InputContainer,
  InputError,
  InputTitle,
} from './atom';
import { forwardRef } from 'react';
import { InputHeader } from './molecules/Header';

const InputFactory = forwardRef<HTMLInputElement, InputFactoryProps>(
  ({ type, ...rest }, ref) => {
    switch (type) {
      case INPUT.TYPE.TEXT:
      case INPUT.TYPE.PASSWORD:
      case INPUT.TYPE.RADIO: {
        return <DefaultInput ref={ref} type={type} {...rest} />;
      }

      default: {
        throw new Error(`${type} 존재하지 않는 inputType입니다.`);
      }
    }
  }
);

export const Input = Object.assign(InputFactory, {
  Container: InputContainer,
  Title: InputTitle,
  Box: InputBox,
  Error: InputError,
  Header: InputHeader,
});
