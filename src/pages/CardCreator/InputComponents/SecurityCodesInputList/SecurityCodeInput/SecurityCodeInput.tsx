import React, { ChangeEvent } from 'react';

import { useCardApiContext, SecurityCodeInputElement } from '@/stores/CardContext';
import { filterNumber, isNil } from '@/utils';

import { CardInfoInputElement } from '../../components';

interface SecurityCodeInputProps {
  securityCode: SecurityCodeInputElement;
  index: number;
}

export function SecurityCodeInput({ securityCode, index }: SecurityCodeInputProps) {
  const { value, setRef, isValidate } = securityCode;
  const isError = !isNil(value) && !isValidate;

  const cardContextApis = useCardApiContext();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        const isValidate = checkIsValidate(value);
        cardContextApis?.dispatch({ type: 'securityCodes', payload: { index, value, isValidate } });
      },
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const filteredNumber = filterNumber(e.currentTarget.value);
      return !filteredNumber || filteredNumber.length <= 3;
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return filterNumber(e.currentTarget.value);
    },
  };

  return (
    <CardInfoInputElement
      className="input-basic w-25"
      type="password"
      value={value ?? ''}
      ref={setRef.bind(securityCode)}
      changeEventProps={changeEventProps}
      error={{ isError }}
    />
  );
}

function checkIsValidate(value: string) {
  return !!value && value.length === 3;
}
