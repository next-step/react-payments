import React, { ForwardedRef, forwardRef, memo, useImperativeHandle, useState } from 'react';

import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import { filterNumber } from '@/utils';

import type { CardStateSetter } from '../utils';
import type { PasswordsState, ErrorMessageType } from '../types';
import { CardInputWrapperPure } from './components/CardInputWrapper';
import { useErrorMessage } from './hooks/useErrorMessage';
import { CardInfoInputElement } from './components/CardInfoInputElement';

interface PasswordInputProps {
  passwords: PasswordsState;
  createPasswordSetter: CardStateSetter<string>;
}

export interface PasswordInputRef {
  setErrorMessage: (messageType: ErrorMessageType) => void;
}

function PasswordInput({ passwords, createPasswordSetter }: PasswordInputProps, ref: ForwardedRef<PasswordInputRef>) {
  const [errorMessage, setErrorMessage] = useErrorMessage({
    inValid: '비밀번호 앞 2자리를 모두 입력해주세요.',
  });

  useImperativeHandle(ref, () => ({ setErrorMessage }));

  return (
    <CardInputWrapperPure header="카드 비밀번호" errorMessage={errorMessage}>
      <div className="flex">
        {passwords.map((password, i) => {
          return <Password key={password.key} password={password} index={i} />;
        })}
        <span className="flex-center w-15 mr-10">•</span>
        <span className="flex-center w-15 mr-10">•</span>
      </div>
    </CardInputWrapperPure>
  );
}

const PASSWORD_ELEMENT_SEQUENCE_KEY = 'password';

interface PasswordProps {
  password: PasswordsState[number];
  index: number;
}

function Password({ password, index }: PasswordProps) {
  const [passwordState, setPasswordState] = useState(password);
  const { key, value, checkIsAllowInput, checkIsValid } = passwordState;

  const { setElement, toTheNextElement } = useSequentialFocusWithElements();
  toTheNextElement(PASSWORD_ELEMENT_SEQUENCE_KEY, index, checkIsValid(value));

  return (
    <CardInfoInputElement
      key={key}
      type="password"
      className="input-basic w-15 mr-10"
      value={value ?? ''}
      ref={(el) => {
        setElement(PASSWORD_ELEMENT_SEQUENCE_KEY, index, el);
      }}
      onChangeProps={{
        props: { setState: (value: string) => setPasswordState((prev) => ({ ...prev, value })) },
        checkWhetherSetState: (e) => {
          const filteredNumber = filterNumber(e.currentTarget.value);
          return checkIsAllowInput(filteredNumber);
        },
        getNewValue: (e) => {
          return filterNumber(e.currentTarget.value);
        },
      }}
    />
  );
}

export const PasswordInputPure = memo(forwardRef(PasswordInput));
