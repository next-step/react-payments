import React, { ChangeEvent, useContext } from 'react';

import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import type { PasswordsState } from '@/pages/CardCreator/types';
import { ApiContext } from '@/stores/cardCreator';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components/CardInfoInputElement';

const PASSWORD_ELEMENT_SEQUENCE_KEY = 'password';

interface PasswordInputProps {
  password: PasswordsState[number];
  index: number;
}

export function PasswordInput({ password, index }: PasswordInputProps) {
  const { key, value, checkIsAllowInput, checkIsValid } = password;

  const apiContext = useContext(ApiContext);

  const { setElement, toTheNextElement } = useSequentialFocusWithElements();
  toTheNextElement(PASSWORD_ELEMENT_SEQUENCE_KEY, index, checkIsValid(value));

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
      ref={(el) => {
        setElement(PASSWORD_ELEMENT_SEQUENCE_KEY, index, el);
      }}
      onChangeProps={inputChangeEventProps}
    />
  );
}
