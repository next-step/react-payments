import { Children, Fragment } from 'react';
import { Parser } from '@/utils/parser';
import { InputBoxProps } from '../input.type';

export const InputBox = ({
  children,
  separator,
  classNames,
}: InputBoxProps) => {
  if (separator === undefined) {
    return (
      <div className={Parser.classNames(['input-box', ...(classNames ?? [])])}>
        {children}
      </div>
    );
  }

  const childrenArray = Children.toArray(children);
  const lastChildIndex = childrenArray.length - 1;

  return (
    <div className={Parser.classNames(['input-box', ...(classNames ?? [])])}>
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
