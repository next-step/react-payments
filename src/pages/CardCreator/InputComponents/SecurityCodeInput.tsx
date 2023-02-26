import React from 'react';

import useExtendedState from '@/hooks/useExtendedState';

import { SecurityCodesState } from '../types';
import { useInputEventHandler } from './hooks/useInputEventHandler';
import { CardInputWrapperPure } from './components/CardInputWrapper';

interface SecurityCodeInputProps {
  // prettier-ignore
  // eslint-disable-next-line
  cardOwnerNameStateBundle: ReturnType<typeof useExtendedState<SecurityCodesState>>;
}

function SecurityCodeInput({
  cardOwnerNameStateBundle,
}: SecurityCodeInputProps) {
  const [securityCodes, setSecurityCodes] = cardOwnerNameStateBundle;

  const { createInputChangeHandler } = useInputEventHandler();

  return (
    <CardInputWrapperPure header="보안코드(CVC/CVV)">
      {
        securityCodes.map((securityCode, i) => {
          const { value } = securityCode;

          return (
            <input
              className="input-basic w-25"
              type="password"
              value={value ?? ''}
              onChange={createInputChangeHandler({ state: securityCode, i, setState: setSecurityCodes })}
            />
          );
        })
      }
    </CardInputWrapperPure>
  );
}

export { SecurityCodeInput };
