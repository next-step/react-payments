import { css, cx } from '@emotion/css';
import { CSSProperties, forwardRef } from 'react';

import type { CombineElementProps } from 'types/utils';

interface InputBaseProps {
  textAlign?: CSSProperties['textAlign'];
}
export type InputProps = CombineElementProps<'input', InputBaseProps>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, textAlign = 'center', ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={cx(
          css`
            background-color: #ecebf1;
            height: 45px;
            width: 100%;
            padding: 0 12px;
            outline: 2px solid transparent;
            text-align: ${textAlign};
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
  }
);

export default Input;
