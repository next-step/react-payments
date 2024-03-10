import { Children, Fragment } from 'react';
import { InputBoxProps } from '../input.type';
import { INPUT } from '../input.constant';

export const InputBox = ({ separator, className, children }: InputBoxProps) => {
  if (separator === undefined) {
    return (
      <div className={`${INPUT.CLASSNAME.BOX} ${className}`}>{children}</div>
    );
  }

  const lastChildIndex = Children.count(children) - 1;

  return (
    <div className={`input-box ${className}`}>
      {Children.map(children, (child, index) => {
        if (index === lastChildIndex) {
          return child;
        }

        const { fieldsFulfilled, symbol } = separator;

        return (
          <Fragment key={index}>
            {child}
            {fieldsFulfilled[index] && <span>{symbol}</span>}
          </Fragment>
        );
      })}
    </div>
  );
};
