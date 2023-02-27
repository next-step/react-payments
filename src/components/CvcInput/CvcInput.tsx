import React, { useEffect, useState } from 'react';
import { TCardComponentProps } from '../../domain/payments/types';
import { replaceNumberOnly } from '../../util/number';

function CvcInput({ onChange }: TCardComponentProps<string>) {
  const [cvc, setCvc] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = replaceNumberOnly(event.target.value);

    setCvc(value);
  };

  useEffect(() => {
    onChange?.(cvc);
  }, [cvc]);

  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input className="input-basic w-25" type="password" maxLength={3} onChange={handleChange} value={cvc} />
    </div>
  );
}

export default CvcInput;
