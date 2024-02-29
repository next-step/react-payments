import { Children } from 'react';
import { InputBoxProps } from '../input.type';

export const InputBox = ({ children, separator }: InputBoxProps) => {
  if (separator === undefined) {
    return <div className='input-box'>{children}</div>;
  }

  const childrenArray = Children.toArray(children);
  const lastChildIndex = childrenArray.length - 1;

  return (
    <div className='input-box'>
      {childrenArray.map((child, index) => {
        if (index === lastChildIndex) {
          return child;
        }

        return (
          <>
            {child}
            <span>{separator}</span>
          </>
        );
      })}
    </div>
  );
};
