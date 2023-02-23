import { css, cx } from '@emotion/css';
import { CSSProperties, forwardRef } from 'react';

import InputProgress from './InputProgress';
import Label from './Label';

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
  label?: string;
  hasProgress?: boolean;
  value?: string;
  defaultValue?: string;
}
export interface InputProps extends CombineElementProps<'input', InputBaseProps> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      defaultValue,
      value,
      hasProgress = false,
      textAlign = 'center',
      size = 'full',
      ...props
    },
    ref
  ) => {
    const width = INPUT_SIZE[size];
    const hasLabel = Boolean(label);
    const hasHeader = Boolean(label) || hasProgress;
    const headerJustifyContent = !label ? 'flex-end' : 'space-between';
    const currentLength = value?.length ?? 0;
    const maxLength = props.maxLength ?? 0;

    return (
      <>
        {hasHeader && (
          <div
            className={css`
              display: flex;
              justify-content: ${headerJustifyContent};
              width: ${width};
              margin: 0 0 0.375rem;
            `}
          >
            {hasLabel && <Label>{label}</Label>}
            {hasProgress && <InputProgress current={currentLength} max={maxLength} />}
          </div>
        )}
        <input
          ref={ref}
          type="text"
          {...(!defaultValue && { value })}
          {...(!value && { defaultValue })}
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
      </>
    );
  }
);

export default Input;
