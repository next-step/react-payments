import { useState } from 'react';

const useSecurityCode = () => {
  const [securityCode, setSecurityCode] = useState<string>('');

  const handleSecurityCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const isNumber = !Number.isNaN(Number(value));
    if (!isNumber || value.length > 3) return;

    setSecurityCode(value);
  };

  return {
    securityCode,
    handleSecurityCode,
  };
};

export default useSecurityCode;
