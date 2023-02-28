import React from 'react';
import useNumberInput from '../../hooks/useNumberInput';
import { TCardComponentProps } from '../../domain/payments/types';

const CVC_MAX_LENGTH = 3;
function CvcInput({ onChange }: TCardComponentProps<string[]>) {
  const { numbers: cvc, handleChange } = useNumberInput({
    initValues: [''],
    maxLength: CVC_MAX_LENGTH,
    onChange,
  });

  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        className="input-basic w-25"
        type="password"
        maxLength={CVC_MAX_LENGTH}
        onChange={(event) => handleChange(event, 0)}
        value={cvc}
      />
    </div>
  );
}

export default CvcInput;
