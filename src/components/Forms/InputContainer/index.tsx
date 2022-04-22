import React, { FC } from 'react';
import {
  InputContainerEl,
  InputLabel,
  InputTitle,
} from './inputContainerStyle';

const InputContainer: FC<{
  className?: string;
  title?: string;
  titleAfterNode?: React.ReactNode;
  isError?: boolean;
}> = ({ title = '', titleAfterNode, children, isError, ...others }) => {
  return (
    <InputContainerEl isError={isError} {...others}>
      <InputLabel>
        {title && <InputTitle isError={isError}>{title}</InputTitle>}
        {title && titleAfterNode}
      </InputLabel>
      {children}
    </InputContainerEl>
  );
};

export default InputContainer;
