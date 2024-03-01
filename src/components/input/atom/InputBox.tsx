import { Children, Fragment } from 'react';
import { InputBoxProps } from '../input.type';
import { INPUT } from '../input.constant';

export const InputBox = ({ separator, className, children }: InputBoxProps) => {
  if (separator === undefined) {
    return (
      <div className={`${INPUT.CLASSNAME.BOX} ${className}`}>{children}</div>
    );
  }

  const childrenArray = Children.toArray(children);
  const lastChildIndex = childrenArray.length - 1;

  return (
    <div className={`input-box ${className}`}>
      {childrenArray.map((child, index) => {
        if (index === lastChildIndex) {
          return child;
        }

        const { eachFieldFulfilled, symbol } = separator;

        return (
          <Fragment key={index}>
            {child}
            {eachFieldFulfilled[index] && <span>{symbol}</span>}
          </Fragment>
        );
      })}
    </div>
  );
};
