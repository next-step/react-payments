import { useState } from 'react';

import { isNumber } from 'utils';

const useSecretCode = () => {
  const [secretCode, setSecretCode] = useState('');

  const handleChangeSecretCode: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    if (value !== '' && !isNumber(value)) {
      return;
    }

    setSecretCode(value);
  };

  return { secretCode, handleChangeSecretCode };
};

export default useSecretCode;
