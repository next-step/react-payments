import React, { memo } from 'react';

import { PasswordsState } from '@/stores/CardCreatorContext/CardCreatorStates';

import { CardInputWrapperPure } from '../components/CardInputWrapper';
import { PasswordInput } from './PasswordInput';
import { useErrorContext } from '../hooks/useErrorContext';

interface PasswordsInputListProps {
  passwords?: PasswordsState;
}

function PasswordsInputList({ passwords }: PasswordsInputListProps) {
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
