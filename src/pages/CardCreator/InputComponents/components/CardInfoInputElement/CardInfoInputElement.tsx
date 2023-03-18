import React, {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
} from 'react';

import { useInputEventHandler } from './useInputEventHandler';
import type { BlurEventHandlerProps, ChangeEventHandlerProps } from './useInputEventHandler';
import { StyledCardInfoInputElement, StyledInput, StyledErrorMessage } from './CardInfoInputElement.styled';

type InputAttributeType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type OmittedInputAttributeType = Omit<InputAttributeType, 'onChange' | 'onBlur' | 'ref'>;

export interface CardInfoInputElementProps extends OmittedInputAttributeType {
  changeEventProps?: ChangeEventHandlerProps;
  blurEventProps?: BlurEventHandlerProps;
  error?: {
    isError?: boolean;
    message?: string | null;
  };
}

function CardInfoInputElementComponent(
  { changeEventProps, blurEventProps, type, value, className, error, ...props }: CardInfoInputElementProps,
  ref: ForwardedRef<HTMLInputElement | null>
) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { createInputChangeHandler, createInputBlurHandler } = useInputEventHandler();

  // @ts-ignore
  useImperativeHandle(ref, () => inputRef.current);

  const errorClassName = error?.isError ? 'error' : '';

  return (
    <StyledCardInfoInputElement className={className}>
      <StyledInput
        {...props}
        type={type ?? 'text'}
        value={value ?? ''}
        className={`input-basic text-black ${errorClassName}`}
        ref={inputRef}
        onChange={changeEventProps && createInputChangeHandler(changeEventProps)}
        onBlur={blurEventProps && createInputBlurHandler(blurEventProps)}
      />
      {error?.isError && error?.message && <StyledErrorMessage>{error.message}</StyledErrorMessage>}
    </StyledCardInfoInputElement>
  );
}

export const CardInfoInputElement = forwardRef(CardInfoInputElementComponent);
