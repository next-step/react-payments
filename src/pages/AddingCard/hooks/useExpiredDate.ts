import { useState } from 'react';

import { isNumber } from 'utils';
import type { ExpiredDate } from 'types/card';

const INITIAL_STATE: ExpiredDate = {
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

    if (name === 'month' && isOutOfRangeMonth(value)) {
      return;
    }

    setExpiredDate((prevState) => ({ ...prevState, [name]: value }));
  };

  return { expiredDate, handleChangeExpiredDate };
};

const isOutOfRangeMonth = (month: string) => {
  if (month.length === 1) {
    return month !== '0' && month !== '1';
  }

  if (month.length === 2) {
    return +month <= 0 || +month > 12;
  }
};

export default useExpiredDate;
