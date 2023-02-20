import React, { useRef } from 'react';

import type useExtendedState from './hooks/useExtendedState';
import { PasswordsState } from './types/types';
import { checkIsArrayLast, filterNumber, updateArray, updateObject } from './utils/utils';

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

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <div className="flex">
        {passwords.map(({ key, value, checkIsAllowInput }, i) => {
          const isLast = checkIsArrayLast(passwords, i);
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
              onChange={(e) => {
                const numberValue = filterNumber(e.currentTarget.value);
                if (!checkIsAllowInput(numberValue)) {
                  return;
                }

                setPasswords(
                  (prevPasswords) =>
                    updateArray(prevPasswords, i, updateObject(prevPasswords[i], 'value', numberValue)),
                  {
                    stateRefreshValidator: (prevPasswords) => {
                      const prevVal = prevPasswords[i].value;
                      return numberValue !== prevVal;
                    },
                  }
                );
              }}
            />
          );
        })}
        <span className="flex-center w-15 mr-10">•</span>
        <span className="flex-center w-15 mr-10">•</span>
      </div>
    </div>
  );
}

export default PasswordInput;
