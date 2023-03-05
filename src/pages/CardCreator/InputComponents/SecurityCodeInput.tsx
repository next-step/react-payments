import React, { ForwardedRef, forwardRef, memo, useImperativeHandle, useState } from 'react';

import { filterNumber } from '@/utils';

import type { CardStateSetter } from '../utils';
import type { SecurityCodesState, ErrorMessageType } from '../types';
import { CardInputWrapperPure } from './components/CardInputWrapper';
import { useErrorMessage } from './hooks/useErrorMessage';
import { CardInfoInputElement } from './components/CardInfoInputElement';
import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';

interface SecurityCodeInputProps {
  securityCodes: SecurityCodesState;
  createSecurityCodeSetter: CardStateSetter<string>;
}

export interface SecurityCodeInputRef {
  setErrorMessage: (messageType: ErrorMessageType) => void;
}

function SecurityCodeInput(
  { securityCodes, createSecurityCodeSetter }: SecurityCodeInputProps,
  ref: ForwardedRef<SecurityCodeInputRef>
) {
  const [errorMessage, setErrorMessage] = useErrorMessage({
    inValid: '보안번호 3자리를 입력해주세요.',
  });

  useImperativeHandle(ref, () => ({ setErrorMessage }));

  return (
    <CardInputWrapperPure header="보안코드(CVC/CVV)" errorMessage={errorMessage}>
      {securityCodes.map((securityCode, i) => {
        return <SecurityCode key={securityCode.key} securityCode={securityCode} index={i} />;
      })}
    </CardInputWrapperPure>
  );
}

const SECURITY_CODE_ELEMENT_SEQUENCE_KEY = 'securityCode';

interface SecurityCodeProps {
  securityCode: SecurityCodesState[number];
  index: number;
}

function SecurityCode({ securityCode, index }: SecurityCodeProps) {
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

export const SecurityCodeInputPure = memo(forwardRef(SecurityCodeInput));
