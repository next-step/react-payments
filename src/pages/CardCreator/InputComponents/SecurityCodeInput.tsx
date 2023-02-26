import React, { memo } from 'react';

import { filterNumber } from '@/utils';

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
        const { value, checkIsAllowInput } = securityCode;

        return (
          <input
            className="input-basic w-25"
            type="password"
            value={value ?? ''}
            onChange={createInputChangeHandler({
              props: { setState: createSecurityCodeSetter(i) },
              checkWhetherSetState: (e) => {
                const filteredNumber = filterNumber(e.currentTarget.value);
                return checkIsAllowInput(filteredNumber);
              },
              getNewValue: (e) => {
                return filterNumber(e.currentTarget.value);
              },
            })}
          />
        );
      })}
    </CardInputWrapperPure>
  );
}

export const SecurityCodeInputPure = memo(SecurityCodeInput);
