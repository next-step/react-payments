import React from 'react';

import useExtendedState from '@/hooks/useExtendedState';

import { SecurityCodesState } from '../types';
import { useInputEventHandler } from './hooks/useInputEventHandler';

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
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
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
    </div>
  );
}

export { SecurityCodeInput };
