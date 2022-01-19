import { InputTitle } from 'components/UI';
import { InputErrorMessage } from 'components/UI/Typography';
import React from 'react';
import { InputBox, InputContainer } from './input.style';

interface InputWrapperProps {
  title: string;
  /**
   * InputBox width
   */
  width?: number;
  /**
   * Has InputBox
   */
  hasBox?: boolean;
  hasError?: boolean;
  errorMessage?: string;
}

const InputWrapper: React.FC<InputWrapperProps> = ({
  title,
  width,
  hasBox = true,
  hasError,
  errorMessage,
  children,
}) => {
  return (
    <InputContainer>
      <InputTitle>{title}</InputTitle>
      {hasBox ? <InputBox width={width}>{children}</InputBox> : <>{children}</>}
      {hasError && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
    </InputContainer>
  );
};

export default InputWrapper;
