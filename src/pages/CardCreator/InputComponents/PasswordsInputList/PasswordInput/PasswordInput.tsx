import React, { ChangeEvent, useContext } from 'react';

import { ApiContext, PasswordsState } from '@/stores/CardContext';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components';

interface PasswordInputProps {
  password: PasswordsState[number];
  index: number;
}

export function PasswordInput({ password, index }: PasswordInputProps) {
  const { key, value, checkIsAllowInput, setRef } = password;

  const apiContext = useContext(ApiContext);

  const changeEventProps = {
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
      changeEventProps={changeEventProps}
    />
  );
}
