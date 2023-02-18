import { css, cx } from '@emotion/css';
import { forwardRef } from 'react';

import type { CombineElementProps } from 'types/utils';

type InputProps = CombineElementProps<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={cx(
        css`
          background-color: #ecebf1;
          height: 45px;
          width: 100%;
          text-align: center;
          outline: 2px solid transparent;
          outline-offset: 2px;
          border-color: #9ca3af;
          border: none;
          border-radius: 0.25rem;
          &::placeholder {
            color: #9ca3af;
          }
        `,
        className
      )}
    />
  );
});

export default Input;
