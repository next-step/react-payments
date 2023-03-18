import React, { memo } from 'react';

import type { PasswordsState } from '@/stores/CardContext';

import { CardInputWrapperPure } from '../components';
import { PasswordInput } from './PasswordInput';

interface PasswordsInputListProps {
  passwords?: PasswordsState;
}

function PasswordsInputList({ passwords }: PasswordsInputListProps) {
  return (
    <CardInputWrapperPure header="카드 비밀번호">
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
