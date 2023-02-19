import { css } from '@emotion/css';

export interface InputProgressProps {
  current: number;
  max: number;
}

function InputProgress({ current, max }: InputProgressProps) {
  return (
    <div
      className={css`
        color: #525252;
        font-size: 12px;
        line-height: 14px;
      `}
    >
      <span>{current}</span>
      <span
        className={css`
          margin: 0 1px;
        `}
      >
        /
      </span>
      <span>{max}</span>
    </div>
  );
}

export default InputProgress;
