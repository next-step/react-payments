import React, { memo } from 'react';

import type { TCardStore } from '@/stores/CardContext/initialCardStore';

import { CardInputWrapperPure } from '../components';
import { PasswordInput } from './PasswordInput';

interface PasswordsInputListProps {
  passwords: TCardStore['passwords'];
}

export const PasswordsInputList = memo(function PasswordsInputList({ passwords }: PasswordsInputListProps) {
  const errorMessage = passwords?.find((password) => !!password.errorMessage)?.errorMessage;

  return (
    <CardInputWrapperPure header="카드 비밀번호" errorMessage={errorMessage}>
      <div className="flex">
        {passwords.map((password, i) => {
          return <PasswordInput key={`password-input-${i}`} password={password} index={i} />;
        })}
        <span className="flex-center w-15 mr-10">•</span>
        <span className="flex-center w-15 mr-10">•</span>
      </div>
    </CardInputWrapperPure>
  );
});
