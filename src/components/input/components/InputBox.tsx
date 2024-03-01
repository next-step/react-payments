import { Children, Fragment } from 'react';
import { InputBoxProps } from '../input.type';

export const InputBox = ({ separator, className, children }: InputBoxProps) => {
  if (separator === undefined) {
    return <div className={`input-box ${className}`}>{children}</div>;
  }

  const childrenArray = Children.toArray(children);
  const lastChildIndex = childrenArray.length - 1;

  return (
    <div className={`input-box ${className}`}>
      {childrenArray.map((child, index) => {
        if (index === lastChildIndex) {
          return child;
        }

        return (
          <Fragment key={index}>
            {child}
            <span>{separator}</span>
          </Fragment>
        );
      })}
    </div>
  );
};
