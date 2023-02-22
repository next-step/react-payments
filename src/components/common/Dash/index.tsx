import { css } from '@emotion/css';
import { CSSProperties } from 'react';

export interface DashProps {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}

function Dash({ width = 6, height = 3 }: DashProps) {
  return (
    <span
      className={css`
        &::after {
          display: block;
          content: '';
          width: ${pixelOf(width)};
          height: ${pixelOf(height)};
          background-color: #000;
        }
      `}
    ></span>
  );
}

const pixelOf = (value: string | number) => (typeof value === 'number' ? `${value}px` : value);

export default Dash;
