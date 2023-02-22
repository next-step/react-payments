import { css, cx } from '@emotion/css';
import { CSSProperties, forwardRef } from 'react';

import type { CombineElementProps } from 'types/utils';

const INPUT_SIZE = {
  small: '15%',
  medium: '25%',
  large: '50%',
  full: '100%',
};

interface InputBaseProps {
  textAlign?: CSSProperties['textAlign'];
  size?: keyof typeof INPUT_SIZE;
}
export interface InputProps extends CombineElementProps<'input', InputBaseProps> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, textAlign = 'center', size = 'full', ...props }, ref) => {
    const width = INPUT_SIZE[size];

    return (
      <input
        ref={ref}
        {...props}
        className={cx(
          css`
            background-color: #ecebf1;
            height: 45px;
            width: ${width};
            padding: 0 12px;
            outline: 2px solid transparent;
            text-align: ${textAlign};
            outline-offset: 2px;
            border-color: #9ca3af;
            border: none;
            border-radius: 0.25rem;
            box-sizing: border-box;
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
