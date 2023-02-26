import React, { ForwardedRef, forwardRef, memo, useImperativeHandle, useRef } from 'react';

import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import { filterNumber } from '@/utils';

import type { CardStateSetter } from '../utils';
import type { PasswordsState, ErrorMessageType } from '../types';
import { useInputEventHandler } from './hooks/useInputEventHandler';
import { CardInputWrapperPure } from './components/CardInputWrapper';
import { useErrorMessage } from './hooks/useErrorMessage';

interface PasswordInputProps {
  passwords: PasswordsState;
  createPasswordSetter: CardStateSetter<string>;
}

export interface PasswordInputRef {
  setErrorMessage: (messageType: ErrorMessageType) => void;
}

function PasswordInput({ passwords, createPasswordSetter }: PasswordInputProps, ref: ForwardedRef<PasswordInputRef>) {
  const passwordInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const [errorMessage, setErrorMessage] = useErrorMessage({
    inValid: '비밀번호 앞 2자리를 모두 입력해주세요.',
  });
  const { createInputChangeHandler } = useInputEventHandler();
  const { toTheNextElement } = useSequentialFocusWithElements(passwordInputsRef);

  useImperativeHandle(ref, () => ({ setErrorMessage }));

  return (
    <CardInputWrapperPure header="카드 비밀번호" errorMessage={errorMessage}>
      <div className="flex">
        {passwords.map((password, i) => {
          const { key, value, checkIsAllowInput } = password;

          toTheNextElement(i, !!value && value.length < 2);

          return (
            <input
              key={key}
              type="password"
              className="input-basic w-15 mr-10"
              value={value ?? ''}
              ref={(ref) => {
                passwordInputsRef.current[i] = ref;
              }}
              onChange={createInputChangeHandler({
                props: { setState: createPasswordSetter(i) },
                checkWhetherSetState: (e) => {
                  const filteredNumber = filterNumber(e.currentTarget.value);
                  return checkIsAllowInput(filteredNumber);
                },
                getNewValue: (e) => {
                  return filterNumber(e.currentTarget.value);
                },
              })}
            />
          );
        })}
        <span className="flex-center w-15 mr-10">•</span>
        <span className="flex-center w-15 mr-10">•</span>
      </div>
    </CardInputWrapperPure>
  );
}

export const PasswordInputPure = memo(forwardRef(PasswordInput));
