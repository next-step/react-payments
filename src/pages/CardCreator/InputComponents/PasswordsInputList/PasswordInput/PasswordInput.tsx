import React, { ChangeEvent } from 'react';

import { CardPasswordInputElement, useCardContextApis } from '@/contexts/CardContext';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components';

interface PasswordInputProps {
  password: CardPasswordInputElement;
  index: number;
}

export function PasswordInput({ password, index }: PasswordInputProps) {
  const { value, setRef, errorMessage } = password;
  const isError = !!errorMessage;

  const cardContextApis = useCardContextApis();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        cardContextApis?.dispatch({ type: 'passwords', payload: { index, value } });
      },
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const filteredNumber = filterNumber(e.currentTarget.value);
      return !filteredNumber || filteredNumber.length < 2;
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return filterNumber(e.currentTarget.value);
    },
  };

  const handlePasswordInputFocus = () => {
    cardContextApis?.dispatch({ type: 'passwords', payload: { index, value: value || '' } });
  };

  return (
    <CardInfoInputElement
      type="password"
      className="input-basic w-15 mr-10"
      value={value ?? ''}
      ref={setRef.bind(password)}
      changeEventProps={changeEventProps}
      error={{ isError }}
      onFocus={handlePasswordInputFocus}
    />
  );
}
