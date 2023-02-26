import React, { useEffect, useState } from 'react';
import { onNumericKeyDownOnly } from '../../domain/payments/listeners';

type TCVCInputProps = {
  onChange?: (cvc: string) => void;
};

function CvcInput({ onChange }: TCVCInputProps) {
  const [cvc, setCvc] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(event.target.value);
  };

  useEffect(() => {
    onChange?.(cvc);
  }, [cvc]);

  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        className="input-basic w-25"
        type="password"
        maxLength={3}
        onChange={handleChange}
        onKeyDown={onNumericKeyDownOnly}
      />
    </div>
  );
}

export default CvcInput;
