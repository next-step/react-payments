import React, { ChangeEvent, useEffect, useState } from 'react';

import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import type { SecurityCodesState } from '@/stores/CardCreatorContext/CardCreatorStates';
import { filterNumber } from '@/utils';

import { CardInfoInputElement } from '../../components/CardInfoInputElement';

const SECURITY_CODE_ELEMENT_SEQUENCE_KEY = 'securityCode';

interface SecurityCodeInputProps {
  securityCode: SecurityCodesState[number];
  index: number;
}

export function SecurityCodeInput({ securityCode, index }: SecurityCodeInputProps) {
  const [securityCodeState, setSecurityCodeState] = useState(securityCode);
  const { key, value, checkIsAllowInput, checkIsValid } = securityCodeState;

  const { setElement, toTheNextElement } = useSequentialFocusWithElements();

  useEffect(() => {
    toTheNextElement(SECURITY_CODE_ELEMENT_SEQUENCE_KEY, index, checkIsValid(value));
  }, [toTheNextElement, index, checkIsValid, value]);

  const inputChangeEventProps = {
    props: { setState: (value: string) => setSecurityCodeState((prev) => ({ ...prev, value })) },
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
      ref={(el) => setElement(SECURITY_CODE_ELEMENT_SEQUENCE_KEY, index, el)}
      onChangeProps={inputChangeEventProps}
    />
  );
}
