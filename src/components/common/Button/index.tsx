import { CSSProperties } from 'react';
import { css, cx } from '@emotion/css';

import { CombineElementProps } from 'types/utils';

interface ButtonBaseProps {
  weight?: CSSProperties['fontWeight'];
  fontSize?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
}
export type ButtonProps = CombineElementProps<'button', ButtonBaseProps>;

function Button({
  className,
  children,
  weight = 500,
  fontSize = 14,
  color = '#383838',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cx(
        css`
          font-weight: ${weight};
          font-size: ${typeof fontSize === 'number' ? fontSize + 'px' : fontSize};
          color: ${color};
          background-color: transparent;
          border: none;
          box-sizing: border-box;
        `,
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
