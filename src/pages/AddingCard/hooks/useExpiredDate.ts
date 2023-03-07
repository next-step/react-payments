import { useState } from 'react';

import { isNumber, isOutOfRangeMonth, isOutOfRangeYear } from 'utils';
import { INPUT_NAME } from 'constants/card';
import type { CardExpiredDate } from 'types/card';

const INITIAL_STATE: CardExpiredDate = {
  month: '',
  year: '',
};

const useExpiredDate = () => {
  const [expiredDate, setExpiredDate] = useState(INITIAL_STATE);

  const handleChangeExpiredDate: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.currentTarget;

    if (value !== '' && !isNumber(value)) {
      return;
    }

    if (name === INPUT_NAME.MONTH && isOutOfRangeMonth(value)) {
      return;
    }

    if (name === INPUT_NAME.YEAR && isOutOfRangeYear(value)) {
      return;
    }

    setExpiredDate((prevState) => ({ ...prevState, [name]: value }));
  };

  return { expiredDate, handleChangeExpiredDate };
};

export default useExpiredDate;
