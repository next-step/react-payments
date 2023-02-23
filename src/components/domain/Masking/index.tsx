import { css } from '@emotion/css';
import { CSSProperties } from 'react';

import { pixelOf } from 'utils';

export interface MaskingProps {
  count: number;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  gap?: CSSProperties['gap'];
  color?: CSSProperties['color'];
}

function Masking({ count, width = 4, height = 4, gap = 2, color = '#000' }: MaskingProps) {
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        gap: ${gap}px;
      `}
    >
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={css`
            display: inline-block;
            width: ${pixelOf(width)};
            height: ${pixelOf(height)};
            border-radius: 50px;
            background-color: ${color};
          `}
        ></span>
      ))}
    </div>
  );
}

export default Masking;
