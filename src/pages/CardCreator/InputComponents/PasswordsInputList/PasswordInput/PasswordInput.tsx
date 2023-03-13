import React, { ChangeEvent, useContext, useEffect } from 'react';

import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import type { PasswordsState } from '@/stores/CardCreatorContext/CardCreatorStates';
import { ApiContext } from '@/stores/CardCreatorContext';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components/CardInfoInputElement';

const PASSWORD_ELEMENT_SEQUENCE_KEY = 'password';

interface PasswordInputProps {
  password: PasswordsState[number];
  index: number;
}

export function PasswordInput({ password, index }: PasswordInputProps) {
  const { key, value, checkIsAllowInput } = password;

  const apiContext = useContext(ApiContext);

  const { setElement, toTheNextElement } = useSequentialFocusWithElements();

  useEffect(() => {
    toTheNextElement(PASSWORD_ELEMENT_SEQUENCE_KEY, index, password.checkIsValid());
  }, [toTheNextElement, index, password]);

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
