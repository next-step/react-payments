import React from 'react';
import type { useState } from 'react';

import { filterNumber } from './utils/utils';

interface SecurityCodeInputProps {
  // prettier-ignore
  // eslint-disable-next-line
  cardOwnerNameStateBundle: ReturnType<typeof useState<string>>;
}

function SecurityCodeInput({
  cardOwnerNameStateBundle,
}: SecurityCodeInputProps) {
  const [securityCode, setSecurityCode] = cardOwnerNameStateBundle;

  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        className="input-basic w-25"
        type="password"
        value={securityCode ?? ''}
        onChange={(e) => {
          const numberValue = filterNumber(e.currentTarget.value);
          if (numberValue.length > 3) {
            return;
          }

          setSecurityCode((prevSecurityCode) => {
            if (numberValue === prevSecurityCode) {
              return prevSecurityCode;
            }
            return numberValue;
          });
        }}
      />
    </div>
  );
}

export { SecurityCodeInput };
