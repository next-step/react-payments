import { FC } from 'react';
import { InputBoxEl } from './inputBoxStyle';

const InputBox: FC<{
  className?: string;
}> = ({ children, ...props }) => {
  return <InputBoxEl {...props}>{children}</InputBoxEl>;
};

export default InputBox;
