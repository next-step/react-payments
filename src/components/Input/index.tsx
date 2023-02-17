import { css, cx } from '@emotion/css';

import type { CombineElementProps } from 'types/utils';

type InputProps = CombineElementProps<'input'>;

function Input({ className, ...props }: InputProps) {
  return (
    <input
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
        `,
        className
      )}
    />
  );
}

export default Input;
