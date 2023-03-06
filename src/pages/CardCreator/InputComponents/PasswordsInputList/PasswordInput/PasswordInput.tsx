import React, { useState } from 'react';

import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import type { PasswordsState } from '@/pages/CardCreator/types';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components/CardInfoInputElement';

const PASSWORD_ELEMENT_SEQUENCE_KEY = 'password';

interface PasswordInputProps {
  password: PasswordsState[number];
  index: number;
}

export function PasswordInput({ password, index }: PasswordInputProps) {
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
