import { forwardRef } from 'react';
import InputBasic from './InputBasic';
import InputBox from './InputBox';
import InputContainer from './InputContainer';
import InputErrorMessage from './InputErrorMessage';
import InputTitle from './InputTitle';
import InputUnderLine from './InputUnderLine';
import InputHeader from './InputHeader';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const InputFactory = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => {
    return <InputBasic className={className} ref={ref} {...rest} />;
  }
);

export const Input = Object.assign(InputFactory, {
  Container: InputContainer,
  Header: InputHeader,
  Title: InputTitle,
  Box: InputBox,
  Underline: InputUnderLine,
  ErrorMessage: InputErrorMessage,
});
