import React, { useRef } from 'react';

import type useExtendedState from '@/hooks/useExtendedState';
import { checkIsArrayLast } from '@/utils';

import { PasswordsState } from '../types';
import { useInputEventHandler } from './hooks/useInputEventHandler';

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

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <div className="flex">
        {passwords.map((password, i) => {
          const { key, value } = password;
          const isLast = checkIsArrayLast(passwords, i);
          // 추상화 대상
          if (value && value.length < 2) {
            if (document.activeElement === passwordInputsRef.current[i]) {
              if (isLast) {
                passwordInputsRef.current[i]?.blur();
              } else {
                passwordInputsRef.current[i + 1]?.focus();
              }
            }
          }

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
    </div>
  );
}

export { PasswordInput };
