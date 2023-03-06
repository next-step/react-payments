import React, { useState } from 'react';

import type { SecurityCodesState } from '@/pages/CardCreator/types';
import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
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
  toTheNextElement(SECURITY_CODE_ELEMENT_SEQUENCE_KEY, index, checkIsValid(value));

  return (
    <CardInfoInputElement
      key={key}
      className="input-basic w-25"
      type="password"
      value={value ?? ''}
      ref={(el) => setElement(SECURITY_CODE_ELEMENT_SEQUENCE_KEY, index, el)}
      onChangeProps={{
        props: { setState: (value) => setSecurityCodeState((prev) => ({ ...prev, value })) },
        checkWhetherSetState: (e) => {
          const filteredNumber = filterNumber(e.currentTarget.value);
          return checkIsAllowInput(filteredNumber);
        },
        getNewValue: (e) => {
          return filterNumber(e.currentTarget.value);
        },
      }}
    />
  );
}
