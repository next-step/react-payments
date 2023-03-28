import React, { ChangeEvent } from 'react';

import { CardPasswordInputElement, useCardApiContext } from '@/stores/CardContext';
import { filterNumber, isNil } from '@/utils';

import { CardInfoInputElement } from '../../components';

interface PasswordInputProps {
  password: CardPasswordInputElement;
  index: number;
}

export function PasswordInput({ password, index }: PasswordInputProps) {
  const { value, setRef, isValidate } = password;
  const isError = !isNil(value) && !isValidate;

  const cardContextApis = useCardApiContext();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        const isValidate = checkIsValidate(value);
        cardContextApis?.dispatch({ type: 'passwords', payload: { index, value, isValidate } });
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

  return (
    <CardInfoInputElement
      type="password"
      className="input-basic w-15 mr-10"
      value={value ?? ''}
      ref={setRef.bind(password)}
      changeEventProps={changeEventProps}
      error={{ isError }}
    />
  );
}

function checkIsValidate(value: string) {
  return !!value && value.length < 2;
}
