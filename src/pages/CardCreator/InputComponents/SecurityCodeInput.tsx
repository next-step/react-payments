import React, { memo } from 'react';

import type { CardStateSetter } from '../utils';
import type { SecurityCodesState } from '../types';
import { useInputEventHandler } from './hooks/useInputEventHandler';
import { CardInputWrapperPure } from './components/CardInputWrapper';

interface SecurityCodeInputProps {
  securityCodes: SecurityCodesState;
  createSecurityCodeSetter: CardStateSetter<string>;
}

function SecurityCodeInput({ securityCodes, createSecurityCodeSetter }: SecurityCodeInputProps) {
  const { createInputChangeHandler } = useInputEventHandler();

  return (
    <CardInputWrapperPure header="보안코드(CVC/CVV)">
      {securityCodes.map((securityCode, i) => {
        const { value } = securityCode;

        return (
          <input
            className="input-basic w-25"
            type="password"
            value={value ?? ''}
            onChange={createInputChangeHandler({ state: securityCode, setState: createSecurityCodeSetter(i) })}
          />
        );
      })}
    </CardInputWrapperPure>
  );
}

export const SecurityCodeInputPure = memo(SecurityCodeInput);
