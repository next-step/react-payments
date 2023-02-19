import { css } from '@emotion/css';
import { CSSProperties } from 'react';

export interface MaskingProps {
  count: number;
  width?: number;
  height?: number;
  gap?: number;
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
            width: ${width}px;
            height: ${height}px;
            border-radius: 50px;
            background-color: ${color};
          `}
        ></span>
      ))}
    </div>
  );
}

export default Masking;
