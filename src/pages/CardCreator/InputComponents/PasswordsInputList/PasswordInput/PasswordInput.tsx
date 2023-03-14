import React, { ChangeEvent, useContext } from 'react';

import type { PasswordsState } from '@/stores/CardCreatorContext/CardCreatorStates';
import { ApiContext } from '@/stores/CardCreatorContext';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components/CardInfoInputElement';

interface PasswordInputProps {
  password: PasswordsState[number];
  index: number;
}

export function PasswordInput({ password, index }: PasswordInputProps) {
  const { key, value, checkIsAllowInput, setRef } = password;

  const apiContext = useContext(ApiContext);

  const inputChangeEventProps = {
    props: { setState: (value: string) => apiContext?.dispatch({ type: 'passwords', payload: { index, value } }) },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const filteredNumber = filterNumber(e.currentTarget.value);
      return checkIsAllowInput(filteredNumber);
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return filterNumber(e.currentTarget.value);
    },
  };

  return (
    <CardInfoInputElement
      key={key}
      type="password"
      className="input-basic w-15 mr-10"
      value={value ?? ''}
      ref={setRef?.bind(password)}
      onChangeProps={inputChangeEventProps}
    />
  );
}
