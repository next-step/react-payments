import React, { ForwardedRef, forwardRef, memo, useImperativeHandle, useMemo } from 'react';

import type { CardOwnersState, ErrorMessageType } from '../types';
import type { CardStateSetter } from '../utils';
import { useInputEventHandler } from './hooks/useInputEventHandler';
import { CardInputWrapperPure } from './components/CardInputWrapper';
import { useErrorMessage } from './hooks/useErrorMessage';

interface CardOwnerInputProps {
  ownerNames: CardOwnersState;
  createOwnerNameSetter: CardStateSetter<string>;
}

export interface CardOwnerInputRef {
  setErrorMessage: (messageType: ErrorMessageType) => void;
}

function CardOwnerInput(
  { ownerNames, createOwnerNameSetter }: CardOwnerInputProps,
  ref: ForwardedRef<CardOwnerInputRef>
) {
  const [errorMessage, setErrorMessage] = useErrorMessage({
    inValid: '소유주 이름을 입력해주세요.',
  });
  const { value, checkIsAllowInput, placeholder } = ownerNames[0];

  const { createInputChangeHandler } = useInputEventHandler();

  useImperativeHandle(ref, () => ({ setErrorMessage }));

  const inputHeader = useMemo(() => ['카드 소유자 이름(선택)', `${value?.length || 0} / 30`], [value]);

  return (
    <CardInputWrapperPure header={inputHeader} errorMessage={errorMessage}>
      <input
        type="text"
        className="input-basic"
        value={value ?? ''}
        placeholder={placeholder}
        onChange={createInputChangeHandler({
          props: { setState: createOwnerNameSetter(0) },
          checkWhetherSetState: (e) => {
            return checkIsAllowInput(e.currentTarget.value);
          },
          getNewValue: (e) => {
            return e.currentTarget.value;
          },
        })}
      />
    </CardInputWrapperPure>
  );
}

export const CardOwnerInputPure = memo(forwardRef(CardOwnerInput));
