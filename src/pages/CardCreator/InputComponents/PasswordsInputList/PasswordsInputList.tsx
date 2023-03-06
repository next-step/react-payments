import React, { ForwardedRef, forwardRef, memo, useImperativeHandle } from 'react';

import type { PasswordsState, ErrorMessageType } from '../../types';
import { CardInputWrapperPure } from '../components/CardInputWrapper';
import { useErrorMessage } from '../hooks/useErrorMessage';
import { PasswordInput } from './PasswordInput';

interface PasswordsInputListProps {
  passwords: PasswordsState;
}

export interface PasswordsInputListRef {
  setErrorMessage: (messageType: ErrorMessageType) => void;
}

function PasswordsInputList({ passwords }: PasswordsInputListProps, ref: ForwardedRef<PasswordsInputListRef>) {
  const [errorMessage, setErrorMessage] = useErrorMessage({
    inValid: '비밀번호 앞 2자리를 모두 입력해주세요.',
  });

  useImperativeHandle(ref, () => ({ setErrorMessage }));

  return (
    <CardInputWrapperPure header="카드 비밀번호" errorMessage={errorMessage}>
      <div className="flex">
        {passwords.map((password, i) => {
          return <PasswordInput key={password.key} password={password} index={i} />;
        })}
        <span className="flex-center w-15 mr-10">•</span>
        <span className="flex-center w-15 mr-10">•</span>
      </div>
    </CardInputWrapperPure>
  );
}

export const PasswordsInputListPure = memo(forwardRef(PasswordsInputList));
