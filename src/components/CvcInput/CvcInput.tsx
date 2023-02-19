import React, { useEffect, useState } from 'react';
import { onNumericKeyDownOnly } from '../../domain/payments/listeners';

type TCVCInputProps = {
  onCvcChange?: (cvc: string) => void;
};

function CvcInput({ onCvcChange }: TCVCInputProps) {
  const [cvc, setCvc] = useState<string>('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(event.target.value);
  };

  useEffect(() => {
    if (onCvcChange) onCvcChange(cvc);
  }, [cvc]);

  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        className="input-basic w-25"
        type="password"
        maxLength={3}
        onChange={onChange}
        onKeyDown={onNumericKeyDownOnly}
      />
    </div>
  );
}

export default CvcInput;
