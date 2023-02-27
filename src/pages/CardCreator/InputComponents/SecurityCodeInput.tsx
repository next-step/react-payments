import React, { ForwardedRef, forwardRef, memo, useImperativeHandle } from 'react';

import { filterNumber } from '@/utils';

import type { CardStateSetter } from '../utils';
import type { SecurityCodesState, ErrorMessageType } from '../types';
import { CardInputWrapperPure } from './components/CardInputWrapper';
import { useErrorMessage } from './hooks/useErrorMessage';
import { CardInfoInputElement } from './components/CardInfoInputElement';

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
        const { key, value, checkIsAllowInput } = securityCode;

        return (
          <CardInfoInputElement
            key={key}
            className="input-basic w-25"
            type="password"
            value={value ?? ''}
            onChangeProps={{
              props: { setState: createSecurityCodeSetter(i) },
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
      })}
    </CardInputWrapperPure>
  );
}

export const SecurityCodeInputPure = memo(forwardRef(SecurityCodeInput));
