import React, { ChangeEvent } from 'react';

import { PasswordsState, useCardContextApiSelector } from '@/stores/CardContext';
import { useErrorContextApiSelector, useErrorSelector } from '@/stores/ErrorContext';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components';

interface PasswordInputProps {
  password: PasswordsState[number];
  index: number;
}

export function PasswordInput({ password, index }: PasswordInputProps) {
  const { key, value, checkIsAllowInput, setRef } = password;

  const cardContextApis = useCardContextApiSelector();
  const errorContextApis = useErrorContextApiSelector();

  const changeEventProps = {
    props: { setState: (value: string) => cardContextApis?.dispatch({ type: 'passwords', payload: { index, value } }) },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const filteredNumber = filterNumber(e.currentTarget.value);
      return checkIsAllowInput(filteredNumber);
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return filterNumber(e.currentTarget.value);
    },
  };

  const blurEventProps = {
    props: {
      eventCallback: () => {
        if (!password.checkIsValid())
          errorContextApis?.dispatch({ type: password.key, message: password.getInvalidMessage() });
        else errorContextApis?.dispatch({ type: null, message: null });
      },
    },
  };

  const errorStore = useErrorSelector();
  const error = { isError: errorStore.type === key };

  return (
    <CardInfoInputElement
      key={key}
      type="password"
      className="input-basic w-15 mr-10"
      value={value ?? ''}
      ref={setRef?.bind(password)}
      changeEventProps={changeEventProps}
      blurEventProps={blurEventProps}
      error={error}
    />
  );
}
