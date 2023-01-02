import './input.css';
import { Children, cloneElement, isValidElement, ReactElement, ReactNode } from 'react';
import InputBox from './InputBox';
import type { InputContainerProps } from './Input.types';

const InputContainer = ({ title = '', children }: InputContainerProps) => {
  const inputBox = cloneElement(getInputBox(children), {});

  return (
    <div className="input-container">
      {title && <span className="input-title">{title}</span>}
      {inputBox}
    </div>
  );
};

function getInputBox(children: ReactNode) {
  const InputBoxType = (<InputBox />).type;
  const childrenArray = Children.toArray(children);
  return childrenArray.find(
    (child) => isValidElement(child) && child.type === InputBoxType,
  ) as ReactElement;
}

export default InputContainer;
