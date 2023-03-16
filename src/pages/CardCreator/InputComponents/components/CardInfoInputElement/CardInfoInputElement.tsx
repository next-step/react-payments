import React, {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
} from 'react';

import { useInputEventHandler } from './useInputEventHandler';
import type { OnBlurHandlerProps, OnChangeHandlerProps } from './useInputEventHandler';
import { StyledInput } from './CardInfoInputElement.styled';

type InputAttributeType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type OmittedInputAttributeType = Omit<InputAttributeType, 'onChange' | 'onBlur' | 'ref'>;

export interface CardInfoInputElementProps extends OmittedInputAttributeType {
  onChangeProps: OnChangeHandlerProps;
  onBlurProps?: OnBlurHandlerProps;
}

function CardInfoInputElementComponent(props: CardInfoInputElementProps, ref: ForwardedRef<HTMLInputElement | null>) {
  const { onChangeProps, onBlurProps, type, value, className, ...rest } = props;
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
      onChange={createInputChangeHandler(onChangeProps)}
      onBlur={onBlurProps && createInputBlurHandler(onBlurProps)}
    />
  );
}

export const CardInfoInputElement = forwardRef(CardInfoInputElementComponent);
