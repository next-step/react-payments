import React, { memo, useRef } from 'react';

import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import { filterNumber } from '@/utils';

import type { CardStateSetter } from '../utils';
import type { PasswordsState } from '../types';
import { useInputEventHandler } from './hooks/useInputEventHandler';
import { CardInputWrapperPure } from './components/CardInputWrapper';

interface PasswordInputProps {
  passwords: PasswordsState;
  createPasswordSetter: CardStateSetter<string>;
}

function PasswordInput({ passwords, createPasswordSetter }: PasswordInputProps) {
  const passwordInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const { createInputChangeHandler } = useInputEventHandler();
  const { toTheNextElement } = useSequentialFocusWithElements(passwordInputsRef);

  return (
    <CardInputWrapperPure header="카드 비밀번호">
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

export const PasswordInputPure = memo(PasswordInput);
