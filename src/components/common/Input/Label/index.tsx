import { css } from '@emotion/css';
import { PropsWithChildren } from 'react';

function Label({ children, ...props }: PropsWithChildren) {
  return (
    <span
      {...props}
      className={css`
        color: #525252;
        font-size: 12px;
        line-height: 14px;
      `}
    >
      {children}
    </span>
  );
}

export default Label;
