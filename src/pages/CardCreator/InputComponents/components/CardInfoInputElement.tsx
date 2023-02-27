import React, {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
} from 'react';

import { useInputEventHandler } from '../hooks/useInputEventHandler';
import type { OnBlurHandlerProps, OnChangeHandlerProps } from '../hooks/useInputEventHandler';

type InputAttributeType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type OmittedInputAttributeType = Omit<InputAttributeType, 'onChange' | 'onBlur' | 'ref'>;

interface CardInfoInputElementProps extends OmittedInputAttributeType {
  onChangeProps: OnChangeHandlerProps;
  onBlurProps?: OnBlurHandlerProps;
}

function CardInfoInputElementComponent(props: CardInfoInputElementProps, ref: ForwardedRef<HTMLInputElement | null>) {
  const { onChangeProps, onBlurProps, type, value } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const { createInputChangeHandler, createInputBlurHandler } = useInputEventHandler();

  // @ts-ignore
  useImperativeHandle(ref, () => inputRef.current);

  return (
    <input
      {...props}
      type={type ?? 'text'}
      value={value ?? ''}
      className="input-basic text-black"
      ref={inputRef}
      onChange={createInputChangeHandler(onChangeProps)}
      onBlur={onBlurProps && createInputBlurHandler(onBlurProps)}
    />
  );
}

export const CardInfoInputElement = forwardRef(CardInfoInputElementComponent);
