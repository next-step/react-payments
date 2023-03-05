import { useState } from 'react';

import { isNumber } from 'utils';
import type { CardNumber } from 'types/card';

const INITIAL_STATE: CardNumber = {
  num1: '',
  num2: '',
  num3: '',
  num4: '',
};

const useNumbers = () => {
  const [numbers, setNumbers] = useState(INITIAL_STATE);

  const handleChangeNumbers: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.currentTarget;

    if (value !== '' && !isNumber(value)) {
      return;
    }

    setNumbers((prevState) => ({ ...prevState, [name]: value }));
  };

  return { numbers, handleChangeNumbers };
};

export default useNumbers;
