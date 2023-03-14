import React, { ChangeEvent } from 'react';

import type { SecurityCodesState } from '@/stores/CardCreatorContext/CardCreatorStates';
import { useCardContextApiSelector } from '@/stores/CardCreatorContext';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components/CardInfoInputElement';

interface SecurityCodeInputProps {
  securityCode: SecurityCodesState[number];
  index: number;
}

export function SecurityCodeInput({ securityCode, index }: SecurityCodeInputProps) {
  const { key, value, checkIsAllowInput, setRef } = securityCode;

  const apis = useCardContextApiSelector();

  const inputChangeEventProps = {
    props: { setState: (value: string) => apis?.dispatch({ type: 'securityCodes', payload: { index, value } }) },
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
      className="input-basic w-25"
      type="password"
      value={value ?? ''}
      ref={setRef?.bind(securityCode)}
      onChangeProps={inputChangeEventProps}
    />
  );
}
