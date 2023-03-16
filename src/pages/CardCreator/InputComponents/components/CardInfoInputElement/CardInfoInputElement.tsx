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
import { StyledInput } from './CardInfoInputElement.styled';

type InputAttributeType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type OmittedInputAttributeType = Omit<InputAttributeType, 'onChange' | 'onBlur' | 'ref'>;

export interface CardInfoInputElementProps extends OmittedInputAttributeType {
  changeEventProps: ChangeEventHandlerProps;
  blurEventProps?: BlurEventHandlerProps;
}

function CardInfoInputElementComponent(props: CardInfoInputElementProps, ref: ForwardedRef<HTMLInputElement | null>) {
  const { changeEventProps, blurEventProps, type, value, className, ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const { createInputChangeHandler, createInputBlurHandler } = useInputEventHandler();

  // @ts-ignore
  useImperativeHandle(ref, () => inputRef.current);

  return (
    <StyledInput
      {...rest}
      type={type ?? 'text'}
      value={value ?? ''}
      className={`input-basic text-black ${className}`}
      ref={inputRef}
      onChange={createInputChangeHandler(changeEventProps)}
      onBlur={blurEventProps && createInputBlurHandler(blurEventProps)}
    />
  );
}

export const CardInfoInputElement = forwardRef(CardInfoInputElementComponent);
