import React, { useRef } from 'react';

import type useExtendedState from '@/hooks/useExtendedState';
import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';

import { PasswordsState } from '../types';
import { useInputEventHandler } from './hooks/useInputEventHandler';
import { CardInputWrapperPure } from './components/CardInputWrapper';

interface PasswordInputProps {
  // prettier-ignore
  // eslint-disable-next-line
  passwordsStateBundle: ReturnType<typeof useExtendedState<PasswordsState>>;
}

function PasswordInput({
  passwordsStateBundle,
}: PasswordInputProps) {
  const [passwords, setPasswords] = passwordsStateBundle;
  const passwordInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const { createInputChangeHandler } = useInputEventHandler();
  const { toTheNextElement } = useSequentialFocusWithElements(passwordInputsRef);

  return (
    <CardInputWrapperPure header="카드 비밀번호">
      <div className="flex">
        {passwords.map((password, i) => {
          const { key, value } = password;

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
              onChange={createInputChangeHandler({ state: password, i, setState: setPasswords })}
            />
          );
        })}
        <span className="flex-center w-15 mr-10">•</span>
        <span className="flex-center w-15 mr-10">•</span>
      </div>
    </CardInputWrapperPure>
  );
}

export { PasswordInput };
