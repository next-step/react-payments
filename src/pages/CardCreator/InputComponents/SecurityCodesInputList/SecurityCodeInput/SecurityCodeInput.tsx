import React, { ChangeEvent, useEffect } from 'react';

import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import type { SecurityCodesState } from '@/stores/CardCreatorContext/CardCreatorStates';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components/CardInfoInputElement';
import { useCardContextApiSelector } from '@/stores/CardCreatorContext';

const SECURITY_CODE_ELEMENT_SEQUENCE_KEY = 'securityCode';

interface SecurityCodeInputProps {
  securityCode: SecurityCodesState[number];
  index: number;
}

export function SecurityCodeInput({ securityCode, index }: SecurityCodeInputProps) {
  const { key, value, checkIsAllowInput } = securityCode;

  const { setElement, toTheNextElement } = useSequentialFocusWithElements();

  const apis = useCardContextApiSelector();

  useEffect(() => {
    toTheNextElement(SECURITY_CODE_ELEMENT_SEQUENCE_KEY, index, securityCode.checkIsValid());
  }, [toTheNextElement, index, securityCode]);

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
      ref={(el) => {
        if (securityCode) securityCode.ref = el;
        setElement(SECURITY_CODE_ELEMENT_SEQUENCE_KEY, index, el);
      }}
      onChangeProps={inputChangeEventProps}
    />
  );
}
