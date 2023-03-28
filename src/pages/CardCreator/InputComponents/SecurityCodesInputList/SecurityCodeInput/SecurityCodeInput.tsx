import React, { ChangeEvent } from 'react';

import { useCardApiContext, SecurityCodeInputElement } from '@/stores/CardContext';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components';

interface SecurityCodeInputProps {
  securityCode: SecurityCodeInputElement;
  index: number;
}

export function SecurityCodeInput({ securityCode, index }: SecurityCodeInputProps) {
  const { value, setRef, errorMessage } = securityCode;
  const isError = !!errorMessage;

  const cardContextApis = useCardApiContext();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        cardContextApis?.dispatch({ type: 'securityCodes', payload: { index, value } });
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

  const handleSecurityCodeInputFocus = () => {
    cardContextApis?.dispatch({ type: 'securityCodes', payload: { index, value: value || '' } });
  };

  return (
    <CardInfoInputElement
      className="input-basic w-25"
      type="password"
      value={value ?? ''}
      ref={setRef.bind(securityCode)}
      changeEventProps={changeEventProps}
      error={{ isError }}
      onFocus={handleSecurityCodeInputFocus}
    />
  );
}
