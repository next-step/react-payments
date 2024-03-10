import { INPUT } from './input.constant';
import { InputFactoryProps } from './input.type';
import {
  DefaultInput,
  InputBox,
  InputContainer,
  InputTitle,
  ReadOnlyPasswordInput,
} from './atom';
import { forwardRef } from 'react';

const InputFactory = forwardRef<HTMLInputElement, InputFactoryProps>(
  ({ type, ...rest }, ref) => {
    switch (type) {
      case INPUT.TYPE.TEXT:
      case INPUT.TYPE.PASSWORD: {
        return <DefaultInput ref={ref} type={type} {...rest} />;
      }

      case INPUT.TYPE.READONLY_PASSWORD: {
        return (
          <ReadOnlyPasswordInput
            ref={ref}
            type='password'
            {...rest}
            value={'*'}
          />
        );
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
});
