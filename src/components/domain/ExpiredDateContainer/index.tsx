import { css } from '@emotion/css';

import { Input, Label } from 'components/common';

import { useInputFocusing, useRefs } from 'hooks';

import { INPUT_NAME, MAX_LENGTH } from 'constants/card';
import type { ExpiredDate } from 'types/card';

interface ExpiredDateContainerProps {
  expiredDate: ExpiredDate;
  handleChangeExpiredDate: React.ChangeEventHandler<HTMLInputElement>;
}

function ExpiredDateContainer({ expiredDate, handleChangeExpiredDate }: ExpiredDateContainerProps) {
  const { month, year } = expiredDate;

  const [monthRef, yearRef] = useRefs<HTMLInputElement>(2);

  useInputFocusing({
    refs: [monthRef, yearRef],
    deps: [month, year],
    maxLength: MAX_LENGTH.EXPIRED_DATE,
  });

  return (
    <div className="input-container">
      <Label>만료일</Label>
      <div className="input-box w-50">
        <Input
          ref={monthRef}
          placeholder="MM"
          type="text"
          value={month}
          name={INPUT_NAME.MONTH}
          onChange={handleChangeExpiredDate}
          maxLength={MAX_LENGTH.EXPIRED_DATE}
        />
        {month.length === MAX_LENGTH.EXPIRED_DATE && (
          <span
            className={css`
              color: #000;
              padding: 4px 0 0;
            `}
          >
            /
          </span>
        )}

        <Input
          ref={yearRef}
          placeholder="YY"
          type="text"
          value={year}
          name={INPUT_NAME.YEAR}
          onChange={handleChangeExpiredDate}
          maxLength={MAX_LENGTH.EXPIRED_DATE}
        />
      </div>
    </div>
  );
}

export default ExpiredDateContainer;
