import React, { memo, useContext } from 'react';

import { PasswordsStoreContext } from '@/stores/cardCreator';

import { CardInputWrapperPure } from '../components/CardInputWrapper';
import { PasswordInput } from './PasswordInput';
import { useErrorContext } from '../hooks/useErrorContext';

interface PasswordsInputListProps {}

function PasswordsInputList(_: PasswordsInputListProps) {
  const passwordStore = useContext(PasswordsStoreContext);
  const passwords = passwordStore?.store;

  const errorMessage = useErrorContext(
    {
      inValid: '비밀번호 앞 2자리를 모두 입력해주세요.',
    },
    [{ errorType: 'passwords', messageType: 'inValid' }]
  );

  return (
    <CardInputWrapperPure header="카드 비밀번호" errorMessage={errorMessage}>
      <div className="flex">
        {passwords?.map((password, i) => {
          return <PasswordInput key={password.key} password={password} index={i} />;
        })}
        <span className="flex-center w-15 mr-10">•</span>
        <span className="flex-center w-15 mr-10">•</span>
      </div>
    </CardInputWrapperPure>
  );
}

export const PasswordsInputListPure = memo(PasswordsInputList);
